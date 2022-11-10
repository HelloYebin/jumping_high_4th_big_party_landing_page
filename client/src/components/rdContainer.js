import styles from "../styles/rdContainer.module.css";
import image from "../image/main-s1.png";
import bg from "../image/redb.png";
import { useRef, useState } from "react";

import "../font.css";

function RdContainer() {
  const imageRef = useRef();
  const textRef = useRef();
  const bgRef = useRef();

  window.addEventListener("scroll", function () {
    const value = window.scrollY;
    bgRef.current.style.top = value * 0.3 + "px";
    textRef.current.style.left = value * 0.5 + "px";
    // textRef.current.style.top = value * 0.33 + "px";
  });

  return (
    <div className={styles.rdContainer}>
      <div className={styles.bgContainer}>
        <img id={styles.image} src={image} ref={imageRef} />
        <a id={styles.text} ref={textRef}>
          BIG PARTY
        </a>
        <img id={styles.bg} src={bg} ref={bgRef} />
      </div>
    </div>
  );
}
export default RdContainer;
