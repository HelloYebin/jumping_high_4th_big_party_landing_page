import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "./infoStyles/routeBooth.module.css";

export default function RouteStorage() {
  return (
    <>
      <div className={styles.boothContainer}>
        <img src={banner} className={styles.banner} width="100%" alt="banner" />
        <RouteNav nav={"행사안내"} current={"부스 안내"} />
        <div className={styles.booth}>
          <h1 className={styles.title}>부스 안내</h1>
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
