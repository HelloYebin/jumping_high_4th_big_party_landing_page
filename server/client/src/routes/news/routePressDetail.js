import { useParams } from "react-router-dom";
import styles from "./newsStyles/routePressDetail.module.css";
import banner from "../../image/notice.png";
import db from "../../db/data.json";

export default function RoutePressDetail() {
  const a = useParams();
  const num = a.id;
  const pressList = db.presses.filter((press) => press.id === Number(num));

  const content = pressList.map((press) => (
    <div key={press.id} className={styles.article}>
      <h1>{press.title}</h1>
      <hr />
      {press.bodyImg ? (
        <img
          width="600px"
          height="600px"
          className={styles.imgBox}
          alt="pressImg"
          src={process.env.PUBLIC_URL + press.bodyImg} //public 경로
        />
      ) : (
        ""
      )}
      <br />
      <span
        dangerouslySetInnerHTML={{ __html: press.body }}
        className={styles.body}
      ></span>
    </div>
  ));

  return (
    <div className={styles.routeDetailContainer}>
      <img src={banner} className={styles.banner} width="100%" alt="banner" />
      {content}
    </div>
  );
}
