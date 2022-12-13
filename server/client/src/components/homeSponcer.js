import styles from "../styles/homeSponcer.module.css";
import jumpingKorea from "../image/logo.png";
import aerower from "../image/aerower.png";
import highjump from "../image/highjump.png";
import kjfa from "../image/KJFA.png";
import original from "../image/ORIGINAL.png";

function HomeSponcer({ dissolve }) {
  return (
    <div
      className={styles.sponcerContainer}
      style={{ backgroundColor: dissolve ? "white" : "#181818" }}
    >
      <div className={styles.sponcerBg}>
        <span className={styles.title}>
          <h1>BIGPARTY</h1>
          <h1>WITH</h1>
          <h1>PARTNER</h1>
        </span>
        <div className={styles.logos}>
          <ul className={styles.sponcers}>
            <li>
              <img src={jumpingKorea} alt="jumpingKor"></img>
            </li>
            <li>
              <img src={aerower} alt="aerower"></img>
            </li>
            <li>
              <img src={highjump} alt="highjump"></img>
            </li>
            <li>
              <img src={original} alt="original"></img>
            </li>
            <li>
              <img src={kjfa} alt="kjfa"></img>
            </li>
            <li>
              <img src={jumpingKorea} alt="jumpingKor"></img>
            </li>
            <li className={styles.bottomLine}>
              <img src={jumpingKorea} width="140px" alt="jumpingKor"></img>
            </li>
            <li className={styles.bottomLine}>
              <img src={jumpingKorea} width="140px" alt="jumpingKor"></img>
            </li>
            <li className={styles.bottomLine}>
              <img src={jumpingKorea} width="140px" alt="jumpingKor"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeSponcer;
