import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "./infoStyles/routePrepare.module.css";

export default function RoutePrepare() {
  return (
    <>
      <div className={styles.prepareContainer}>
        <img src={banner} className={styles.banner} width="100%" />
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
