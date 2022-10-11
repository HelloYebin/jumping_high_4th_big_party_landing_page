import styles from "../../styles/routeSummary.module.css";
import banner from "../../image/notice.png";
import RouteNav from "../../components/routeNav";

export default function RouteHistory() {
  return (
    <>
      <div className={styles.summaryContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"점핑빅파티"} current={"행사 히스토리"} />
        <div className={styles.summary}>
          <h1 className={styles.title}>행사 히스토리</h1>
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