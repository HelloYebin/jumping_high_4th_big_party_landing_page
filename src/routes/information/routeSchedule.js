import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "../../styles/routeSchedule.module.css";

export default function RouteSchedule() {
  return (
    <>
      <div className={styles.summaryContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"행사안내"} current={"프로그램 일정"} />
        <div className={styles.summary}>
          <h1 className={styles.title}>프로그램 일정</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
        </div>
      </div>
    </>
  );
}
