import banner from "../../image/notice.png";
import styles from "./applyStyles/routeReservation.module.css";
import $ from "jquery";
import { useEffect } from "react";

export default function RouteReservation() {
  /* 1. 가맹점 식별하기 */
  const IMP = window.IMP;
  IMP.init("imp57350570");

  const submitHandle = (event) => {
    event.preventDefault();
  };

  const onClickPayment = () => {
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
      m_redirect_url:
        "http://localhost:3000/jumping_high_4th_big_party_landing_page",
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기(결제 완료 후)  */
  function callback(rsp) {
    if (rsp.success) {
      $.ajax({
        url: "http://localhost:3000/jumping_high_4th_big_party_landing_page/payments/complete", // 예: https://www.myservice.com/payments/complete
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: {
          imp_uid: rsp.imp_uid,
          merchant_uid: rsp.merchant_uid,
        },
      }).done(function (data) {
        //응답처리
        switch (data.status) {
          case "vbankIssued":
            // 가상계좌 발급 시 로직
            break;
          case "success":
            // 결제 성공 시 로직
            break;
        }
      });
    } else {
      alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
    }
  }
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
