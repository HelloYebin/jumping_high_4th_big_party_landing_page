import styles from "../../styles/routeInvite.module.css";
import RouteNav from "../../components/routeNav";
import RouteBanner from "./../RouteBanner";

export default function RouteInvite() {
  return (
    <>
      <div className={styles.inviteContainer}>
        <RouteBanner />
        <RouteNav nav={"점핑빅파티"} current={"초대의 글"} />
        <div className={styles.invite}>
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
