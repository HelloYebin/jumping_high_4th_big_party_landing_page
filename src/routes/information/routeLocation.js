import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "../../styles/routeSchedule.module.css";

export default function RouteLocation() {
  return (
    <>
      <div className={styles.summaryContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"행사안내"} current={"행사장 위치"} />
        <div className={styles.summary}>
          <h1 className={styles.title}>행사장 위치</h1>
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
