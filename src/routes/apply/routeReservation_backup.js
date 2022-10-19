import banner from "../../image/notice.png";
import styles from "./applyStyles/routeReservation.module.css";

export default function RouteReservation() {
  const submitHandle = (event) => {
    event.preventDefault();
  };
  const onClickPayment = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp57350570");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "kakaopay", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 100, // 결제금액
      name: "빅파티", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  //가맹점서버 코드
  app.use(bodyParser.json());
  // "/payments/complete"에 대한 POST 요청을 처리
  app.post("/payments/complete", async (req, res) => {
    try {
      const { imp_uid, merchant_uid } = req.body; // req의 body에서 imp_uid, merchant_uid 추출

      // 액세스 토큰(access token) 발급 받기
      const getToken = await axios({
        url: "https://api.iamport.kr/users/getToken",
        method: "post", // POST method
        headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
        data: {
          imp_key: "imp_apikey", // REST API 키
          imp_secret:
            "ekKoeW8RyKuT0zgaZsUtXXTLQ4AhPFW3ZGseDA6bkA5lamv9OqDMnxyeB9wqOsuO9W3Mx9YSJ4dTqJ3f", // REST API Secret
        },
      });
      const { access_token } = getToken.data.response; // 인증 토큰

      // imp_uid로 아임포트 서버에서 결제 정보 조회
      const getPaymentData = await axios({
        url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
        method: "get", // GET method
        headers: { Authorization: access_token }, // 인증 토큰 Authorization header에 추가
      });
      const paymentData = getPaymentData.data.response; // 조회한 결제 정보

      // DB에서 결제되어야 하는 금액 조회
      const order = await Orders.findById(paymentData.merchant_uid);
      const amountToBePaid = order.amount; // 결제 되어야 하는 금액

      // 결제 검증하기
      const { amount, status } = paymentData;
      if (amount === amountToBePaid) {
        // 결제금액 일치. 결제 된 금액 === 결제 되어야 하는 금액
        await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData }); // DB에 결제 정보 저장
        switch (status) {
          case "ready": // 가상계좌 발급
            // DB에 가상계좌 발급 정보 저장
            const { vbank_num, vbank_date, vbank_name } = paymentData;
            await Users.findByIdAndUpdate("/* 고객 id */", {
              $set: { vbank_num, vbank_date, vbank_name },
            });
            // 가상계좌 발급 안내 문자메시지 발송
            SMS.send({
              text: `가상계좌 발급이 성공되었습니다. 계좌 정보 ${vbank_num} ${vbank_date} ${vbank_name}`,
            });
            res.send({ status: "vbankIssued", message: "가상계좌 발급 성공" });
            break;
          case "paid": // 결제 완료
            res.send({ status: "success", message: "일반 결제 성공" });
            break;
        }
      } else {
        // 결제금액 불일치. 위/변조 된 결제
        throw { status: "forgery", message: "위조된 결제시도" };
      }
    } catch (e) {
      res.status(400).send(e);
    }
  });

  return (
    <>
      <img src={banner} className={styles.banner} width="100%" />
      <div className={styles.reservation}>
        <h1 className={styles.title}>예약하기 창입니다.</h1>
        <hr />
        <form onSubmit={submitHandle}>
          <label>이름 : </label>
          <input name="name" type="text"></input>
          <label>연락처 : </label>
          <input name="tel" type="text"></input>
          <label>가격 : 1000원</label>
          <input type="submit" value="결제" onClick={onClickPayment}></input>
        </form>
      </div>
    </>
  );
}
