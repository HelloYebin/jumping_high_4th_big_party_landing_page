import styles from "../styles/thContainer.module.css";
import schedule from "../image/schedule.png";
import booth from "../image/booth1.png";
import { Link } from "react-router-dom";

export default function ThBox({ dissolve, title, desc, item, link }) {
  return (
    <>
      <div
        className={styles.content}
        style={{ backgroundColor: dissolve ? "#181818" : "white" }}
      >
        <h1
          style={{ color: dissolve ? "white" : "#181818" }}
          className={styles.BoxTitle}
        >
          {title}
        </h1>
        <div className={styles.contentBody}>
          <img
            className={styles.descImg}
            src={
              item === "schedule"
                ? schedule
                : "" || item === "booth"
                ? booth
                : ""
            }
            alt={item}
          />
          <h4
            style={{ color: dissolve ? "white" : "#181818" }}
            className={styles.itemDesc}
            dangerouslySetInnerHTML={{ __html: desc }}
          ></h4>
        </div>
        <span>
          <Link to={link} className={styles.detailBtn}>
            <span>자세히보기</span>
          </Link>
        </span>
      </div>
    </>
  );
}
