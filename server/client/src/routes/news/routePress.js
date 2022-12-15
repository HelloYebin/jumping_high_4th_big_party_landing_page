import RouteNav from "../../components/routeNav";
import styles from "./newsStyles/routePress.module.css";
import { Link } from "react-router-dom";
import db from "../../db/data.json";
import RouteBanner from "./../RouteBanner";

export default function RoutePress() {
  const content = db.presses.map((press) => (
    <Link
      to={`/news/press/${press.id}`}
      key={press.id}
      className={styles.articleTitle}
    >
      <div className={styles.pressContent}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={process.env.PUBLIC_URL + press.thumbnail} //public 경로
            alt="pressImage"
          />
        </div>
      </div>
      <p className={styles.contentBody}>{press.title}</p>
    </Link>
  ));

  return (
    <>
      <div className={styles.pressContainer}>
        <RouteBanner />
        <RouteNav nav={"행사소식"} current={"점핑자료"} />
        <div className={styles.press}>
          <h1 className={styles.title}>점핑자료</h1>
          <div className={styles.body}>{content}</div>
        </div>
      </div>
    </>
  );
}
