import styles from "../styles/homeSponcer.module.css";
import jumpingKorea from "../image/logo.png";
import { useState, useEffect } from "react";

function HomeSponcer() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 3300px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 3300) {
      setScroll(true);
    } else if (window.scrollY < 3300) {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };
  return (
    <div
      className={styles.sponcerContainer}
      style={{ backgroundColor: scroll ? "white" : "#181818" }}
    >
      <div className={styles.bg}>
        <span className={styles.title}>
          <h1>BIGPARTY</h1>
          <h1>WITH</h1>
          <h1>SPONCER</h1>
        </span>
        <div className={styles.logos}>
          <ul className={styles.sponcers}>
            <li>
              <img src={jumpingKorea} width="140px"></img>
            </li>
            <li>
              <img src={jumpingKorea} width="140px"></img>
            </li>
            <li>
              <img src={jumpingKorea} width="140px"></img>
            </li>
            <li>
              <img src={jumpingKorea} width="140px"></img>
            </li>
            <li>
              <img src={jumpingKorea} width="140px"></img>
            </li>
            <li>
              <img src={jumpingKorea} width="140px"></img>
            </li>
            <li className={styles.bottomLine}>
              <img src={jumpingKorea} width="140px"></img>
            </li>
            <li className={styles.bottomLine}>
              <img src={jumpingKorea} width="140px"></img>
            </li>
            <li className={styles.bottomLine}>
              <img src={jumpingKorea} width="140px"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeSponcer;
