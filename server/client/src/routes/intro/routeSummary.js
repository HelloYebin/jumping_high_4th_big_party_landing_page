import styles from "../../styles/routeSummary.module.css";
import RouteNav from "../../components/routeNav";
import RouteBanner from "../RouteBanner";

export default function RouteSummary() {
  return (
    <>
      <div className={styles.summaryContainer}>
        <RouteBanner />
        <RouteNav nav={"점핑빅파티"} current={"행사개요"} />
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
    </>
  );
}
