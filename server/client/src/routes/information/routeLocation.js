import RouteNav from "../../components/routeNav";
import styles from "./infoStyles/routeLocation.module.css";
import RouteBanner from "./../RouteBanner";

export default function RouteLocation() {
  return (
    <>
      <div className={styles.locationContainer}>
        <RouteBanner />
        <RouteNav nav={"행사안내"} current={"행사장 위치"} />
        <div className={styles.location}>
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
