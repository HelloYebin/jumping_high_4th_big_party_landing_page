import styles from "../styles/homeSponcer.module.css";
import jumpingKorea from "../image/logo.png";
import { useState, useEffect } from "react";

function HomeSponcer({ dissolve }) {
  return (
    <div
      className={styles.sponcerContainer}
      style={{ backgroundColor: dissolve ? "white" : "#181818" }}
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
