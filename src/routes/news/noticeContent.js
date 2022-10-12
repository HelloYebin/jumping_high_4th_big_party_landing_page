import styles from "./newsStyles/noticeContent.module.css";
import { useState } from "react";

export default function NoticeContent({ title, body }) {
  const [click, setClick] = useState(false);

  const clickHandle = () => {
    setClick(!click);
  };
  return (
    <div
      className={styles.contentContainer}
      onClick={clickHandle}
      style={{ height: click ? "150px" : "75px" }}
    >
      <h2 className={styles.title} style={{ color: click ? "black" : "gray" }}>
        {title}
      </h2>

      <ul className={styles.body}>
        <li className={styles.bodyContent}>{click ? body : null}</li>
      </ul>
    </div>
  );
}
