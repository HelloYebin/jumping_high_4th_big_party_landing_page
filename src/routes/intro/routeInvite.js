import styles from "../../styles/routeInvite.module.css";
import banner from "../../image/notice.png";
import RouteNav from "../../components/routeNav";

export default function RouteInvite() {
  return (
    <>
      <div className={styles.summaryContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"점핑빅파티"} current={"초대의 글"} />
        <div className={styles.summary}>
          <h1 className={styles.title}>초대의 글</h1>
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
