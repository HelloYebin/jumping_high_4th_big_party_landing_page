import RouteNav from "../../components/routeNav";
import styles from "../../styles/routeSchedule.module.css";
import RouteBanner from "./../RouteBanner";

export default function RouteSchedule() {
  return (
    <>
      <div className={styles.scheduleContainer}>
        <RouteBanner />
        <RouteNav nav={"행사안내"} current={"프로그램 일정"} />
        <div className={styles.schedule}>
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
