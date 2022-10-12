import styles from "./newsStyles/pressContent.module.css";
import { useState } from "react";

export default function PressContent({ title, imgSrc }) {
  const [mouseOver, setMouseOver] = useState(false);
  const overHandle = () => {
    setMouseOver(true);
  };
  const leaveHandle = () => {
    setMouseOver(false);
  };

  return (
    <>
      <div
        className={styles.pressContainer}
        onMouseOver={overHandle}
        onMouseLeave={leaveHandle}
      >
        <h1>{title}</h1>
        <div className={styles.imgContainer}>
          <img
            src={`${imgSrc}`}
            width="450px"
            height="500px"
            style={{ transform: mouseOver ? "scale(1.2)" : "scale(1.0)" }}
            className={styles.img}
          ></img>
        </div>
      </div>
    </>
  );
}
