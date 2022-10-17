import banner from "../../image/notice.png";
import styles from "./applyStyles/routeReservation.module.css";

export default function RouteReservation() {
  return (
    <>
      <img src={banner} className={styles.banner} width="100%" />
      <div className={styles.reservation}>
        <h1 className={styles.title}>예약하기 창입니다.</h1>
        <hr />
        <form>
          <label>이름 : </label>
          <input type="text"></input>
          <label>연락처 : </label>
          <input type="number"></input>
        </form>
      </div>
    </>
  );
}
