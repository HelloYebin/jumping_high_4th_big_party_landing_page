import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "./newsStyles/routePress.module.css";
import { Link } from "react-router-dom";
import db from "../../db/data.json";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function RoutePress() {
  const [viewPress, setViewPress] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8001/press/get").then((response) => {
      setViewPress(response.data);
    });
  }, []);

  const content = db.presses.map((press) => (
    <Link
      to={`/news/press/${press.id}`}
      key={press.id}
      className={styles.articleTitle}
    >
      <div className={styles.pressContent}>
        <h1>{press.title}</h1>
        <div className={styles.imgContainer}>
          <img
            width="450px"
            height="500px"
            className={styles.img}
            src={process.env.PUBLIC_URL + press.thumbnail} //public 경로
          />
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className={styles.pressContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"행사소식"} current={"보도자료"} />
        <div className={styles.press}>
          <h1 className={styles.title}>보도자료</h1>
          <div className={styles.body}>{content}</div>
        </div>
      </div>
    </>
  );
}
