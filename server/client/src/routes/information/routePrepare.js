import RouteNav from "../../components/routeNav";
import styles from "./infoStyles/routePrepare.module.css";
import RouteBanner from "./../RouteBanner";

export default function RoutePrepare() {
  return (
    <>
      <div className={styles.prepareContainer}>
        <RouteBanner />
        <RouteNav nav={"행사안내"} current={"참가자 준비물"} />
        <div className={styles.prepare}>
          <h1 className={styles.title}>참가자 준비물</h1>
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
