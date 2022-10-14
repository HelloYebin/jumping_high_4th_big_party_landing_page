import { useParams } from "react-router-dom";
import styles from "./newsStyles/routePressDetail.module.css";
import banner from "../../image/notice.png";
import db from "../../db/data.json";

export default function RoutePressDetail() {
  const a = useParams();
  const num = a.id;
  const pressList = db.presses.filter((press) => press.id === Number(num));
  console.log(pressList[0].body);
  console.log(pressList[0]);
  return (
    <div className={styles.routeDetailContainer}>
      <img src={banner} className={styles.banner} width="100%" />
      {pressList.map((press) => (
        <div key={press.id}>
          <h1>{press.title}</h1>
          <a>{press.body}</a>
        </div>
      ))}
      {}
    </div>
  );
}
