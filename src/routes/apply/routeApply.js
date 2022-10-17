import styles from "./applyStyles/routeApply.module.css";
import banner from "../../image/notice.png";
import { faEarlybirds } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarCheck,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
export default function RouteApply() {
  const navigate = useNavigate();
  const clickEarly = () => {
    if (window.confirm("얼리버드 예약을 하시겠습니까?")) {
      navigate();
    } else {
      console.log("취소");
    }
  };
  const clickReservation = () => {
    if (window.confirm("일반 예약을 하시겠습니까?")) {
      navigate("/apply/reservation");
    } else {
      console.log("취소");
    }
  };

  const checkReservation = () => {
    console.log("예약확인");
  };

  return (
    <div className={styles.applyContainer}>
      <img src={banner} className={styles.banner} width="100%" />
      <div className={styles.apply}>
        <h1 className={styles.title}>참가신청</h1>
        <div className={styles.body}>
          <div className={styles.content} onClick={clickEarly}>
            <FontAwesomeIcon icon={faEarlybirds} className={styles.icons} />
            <button className={styles.buttons}>얼리버드 예약</button>
          </div>
          <div className={styles.content} onClick={clickReservation}>
            <FontAwesomeIcon icon={faCalendarPlus} className={styles.icons} />
            <button className={styles.buttons}>일반 예약</button>
          </div>
          <div className={styles.content} onClick={checkReservation}>
            <FontAwesomeIcon icon={faCalendarCheck} className={styles.icons} />
            <button className={styles.buttons}>예약 확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}
