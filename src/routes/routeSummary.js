import styles from "../styles/routeSummary.module.css";
import banner from "../image/notice.png";
export default function RouteSummary() {
  return (
    <div className={styles.summaryContainer}>
      <img src={banner} className={styles.banner} width="100%" />
      <div className={styles.summary}>
        <h1 className={styles.title}>행사개요</h1>
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
  );
}
