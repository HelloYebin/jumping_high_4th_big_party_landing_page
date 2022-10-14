import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "./newsStyles/routeJumping.module.css";
export default function RouteJumping() {
  return (
    <>
      <div className={styles.jumpingContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"행사소식"} current={"점핑자료"} />
        <div className={styles.notice}>
          <h1 className={styles.title}>점핑자료</h1>
          <div className={styles.body}></div>
        </div>
      </div>
    </>
  );
}
