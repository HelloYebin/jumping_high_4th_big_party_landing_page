import styles from "./introStyles/routeHistory.module.css";
import RouteNav from "../../components/routeNav";
import RouteBanner from "./../RouteBanner";

export default function RouteHistory() {
  return (
    <>
      <div className={styles.historyContainer}>
        <RouteBanner />
        <RouteNav nav={"점핑빅파티"} current={"행사 히스토리"} />
        <div className={styles.history}>
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
