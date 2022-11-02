import banner from "../../image/notice.png";
import styles from "./applyStyles/routeReservation.module.css";
import $ from "jquery";
import { useEffect, useState } from "react";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function RouteReservation() {
  const navigate = useNavigate();

  const [headCount, setHeadCount] = useState(1);
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const price = 100;
  const autoComma = (headCount * price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    if (phoneNumberValue.length === 10) {
      setPhoneNumberValue(
        phoneNumberValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      );
    }
    if (phoneNumberValue.length === 13) {
      setPhoneNumberValue(
        phoneNumberValue
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phoneNumberValue]);

  /* 1. 가맹점 식별하기 */
  const IMP = window.IMP;

  useEffect(() => {
    IMP.init("imp57350570");
  }, []);

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
      buyer_email: event.target.email.value, // 구매자 이메일
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기(결제 완료 후)  */
  function callback(rsp) {
    if (rsp.success) {
      alert("결제가 완료되었습니다.");
      navigate("/");
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

  const changeCount = (event) => {
    setHeadCount(event.target.value);
  };

  if (headCount === "0") {
    setHeadCount(1);
  }
  console.log(headCount);
  const upHandler = (event) => {
    event.preventDefault();
    setHeadCount(Number(headCount) + 1);
    if (headCount >= 99) {
      setHeadCount(99);
    }
  };

  const downHandler = (event) => {
    event.preventDefault();
    setHeadCount(Number(headCount) - 1);
    if (headCount <= 1) {
      setHeadCount(1);
    }
  };

  const handleChange = (event) => {
    setPhoneNumberValue(event.target.value);
  };

  const body = (
    <form onSubmit={submitHandle} className={styles.resForm}>
      <div className={styles.infoForm}>
        <label htmlFor="name">이&nbsp; &nbsp;름 </label>
        <input
          className={styles.placeHolderSpace}
          placeholder="이름을 입력하시오"
          name="name"
          id="name"
          type="text"
          maxLength="10"
          required
        ></input>
      </div>
      <div className={styles.infoForm}>
        <label htmlFor="tel">연락처 </label>
        <input
          className={styles.placeHolderSpace}
          placeholder="휴대전화 번호를 입력하시오"
          name="tel"
          id="tel"
          type="tel"
          maxLength="13"
          onKeyDown={checkNum}
          value={phoneNumberValue}
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className={styles.infoForm}>
        <label htmlFor="email">이메일 </label>
        <input
          className={styles.placeHolderSpace}
          placeholder="이메일을 입력하시오"
          name="email"
          id="email"
          type="email"
        ></input>
      </div>
      <div className={styles.count}>
        <label className={styles.participant}>참가 인원 &nbsp; </label>
        <div className={styles.numCount}>
          <input
            required
            type="text"
            maxLength="2"
            min="1"
            max="30"
            onKeyDown={checkNum}
            onChange={changeCount}
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
      </div>
      <div className={styles.price}>
        <label>가격 : {autoComma}원</label>
      </div>
      <div className={styles.notice}>
        <h3>-안내사항-</h3>
        <p>대표자 이름만 적으면 된다~</p>
        <p>구매 확인은~~~</p>
        <p>환불 요청은~~</p>
        <p>사진청구~</p>
        <p>티켓은 당일 수령~</p>
        <p>티켓은 당일 수령~</p>
        <p>티켓은 당일 수령~</p>
        <p>티켓은 당일 수령~</p>
      </div>
      <span className={styles.submit}>
        <a>가격 : {autoComma}원</a>
        <input type="submit" value="결제" className={styles.payBtn}></input>
      </span>
    </form>
  );

  return (
    <>
      <img src={banner} className={styles.banner} width="100%" />
      <div className={styles.reservation}>
        <h1 className={styles.title}>예약하기</h1>
        <hr />
        {body}
      </div>
    </>
  );
}
