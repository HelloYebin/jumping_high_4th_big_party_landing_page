import banner from "../../image/notice.png";
import styles from "./applyStyles/routeReservation.module.css";
import $ from "jquery";
import { useState } from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RouteReservation() {
  const [headCount, setHeadCount] = useState(1);
  const price = 100;
  const commaNum = (headCount * price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  /* 1. 가맹점 식별하기 */
  const IMP = window.IMP;
  IMP.init("imp57350570");

  const submitHandle = (event) => {
    event.preventDefault();
    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: headCount * price, // 결제금액
      name: "빅파티", // 주문명
      buyer_name:
        headCount > 1
          ? `${event.target.name.value} 외 ${headCount - 1}`
          : event.target.name.value, // 구매자 이름
      buyer_tel: event.target.tel.value, // 구매자 전화번호
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
        url: "https://www.myservice.com/payments/complete", // 예: https://www.myservice.com/payments/complete
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
            alert("결제가 완료되었습니다.");
            break;
        }
      });
    } else {
      alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
    }
  }

  const checkNum = (event) => {
    let key = event.key;
    if (
      (key >= 0 && key < 10) ||
      key === "Backspace" ||
      key === "ArrowLeft" ||
      key === "ArrowRight"
    ) {
      return true;
    } else {
      event.preventDefault();
    }
  };

  const changeNum = (event) => {
    setHeadCount(event.target.value);
  };

  const upHandler = (event) => {
    event.preventDefault();
    setHeadCount(headCount + 1);
    if (headCount >= 99) {
      setHeadCount(99);
    }
  };

  const downHandler = (event) => {
    event.preventDefault();
    setHeadCount(headCount - 1);
    if (headCount <= 1) {
      setHeadCount(1);
    }
  };
  return (
    <>
      <img src={banner} className={styles.banner} width="100%" />
      <div className={styles.reservation}>
        <h1 className={styles.title}>예약하기</h1>
        <hr />
        <form onSubmit={submitHandle} className={styles.resForm}>
          <label>이름 : </label>
          <input name="name" type="text" maxLength="10"></input>
          <label>연락처 : </label>
          <input name="tel" type="tel" maxLength="11"></input>
          <br />
          <label>참가 인원 : </label>
          <div className={styles.numCount}>
            <input
              type="text"
              maxLength="2"
              min="1"
              max="30"
              onKeyDown={checkNum}
              onChange={changeNum}
              value={headCount}
              className={styles.headCount}
            ></input>
            <div className={styles.upDownBtns}>
              <button onClick={upHandler}>
                <FontAwesomeIcon icon={faAngleUp} />
              </button>
              <button onClick={downHandler}>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
          </div>
          <label>가격 : {commaNum}원</label>
          <input type="submit" value="결제"></input>
        </form>
      </div>
    </>
  );
}
