import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "../../styles/routeNotice.module.css";

export default function RouteNotice() {
  return (
    <>
      <div className={styles.noticeContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"행사소식"} current={"행사소식"} />
        <div className={styles.notice}>
          <h1 className={styles.title}>행사소식</h1>
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
