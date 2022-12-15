import styles from "./applyStyles/routeApply.module.css";
import reservationIcon from "../../image/reservation.png";
import RouteBanner from "./../RouteBanner";
export default function RouteApply() {
  return (
    <div className={styles.applyContainer}>
      <RouteBanner />
      <div className={styles.apply}>
        <h1 className={styles.title}>참가신청</h1>
        <div className={styles.body}>
          <a
            className={styles.content}
            href="https://jumping-high.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={reservationIcon}
              width="150px"
              className={styles.icons}
              alt="reservationBtn"
            ></img>
            <button className={styles.buttons}>예약하기</button>
          </a>
        </div>
      </div>
    </div>
  );
}
