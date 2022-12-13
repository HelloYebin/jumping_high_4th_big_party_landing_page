import styles from "../styles/thContainer.module.css";
import schedule from "../image/schedule.png";
import booth from "../image/booth1.png";
import { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";

export default function ThBox({ dissolve, title, desc, item, link }) {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState("");

  const detail = () => {
    if (item === "schedule") {
      setModal(true);
      setMode("schedule");
    } else if (item === "booth") {
      setModal(true);
      setMode("booth");
    }
  };
  const changeModal = (value) => {
    setModal(value);
  };

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
          >
            {desc}
          </h4>
        </div>
        <span>
          <button className={styles.detail} onClick={detail}>
            자세히보기
          </button>
          <button className={styles.responsiveDetail}>
            <Link to={link} className={styles.linkBtn}>
              <p className={styles.responsiveBtn}>자세히보기</p>
            </Link>
          </button>
        </span>
      </div>
      {modal ? <Modal changeModal={changeModal} mode={mode} /> : ""}
    </>
  );
}
