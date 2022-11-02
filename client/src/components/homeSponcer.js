import styles from "../styles/homeSponcer.module.css";
import jumpingKorea from "../image/logo.png";

function HomeSponcer() {
  return (
    <div className={styles.sponcerContainer}>
      <div className={styles.bg}>
        <div className={styles.logos}>
          <h1>스폰서</h1>
          <ul className={styles.sponcers}>
            <div className={styles.sponcer}>
              <img
                src={jumpingKorea}
                width="80%"
                height="80%"
                className={styles.logo_jumpingKorea}
              ></img>
            </div>
            <div className={styles.sponcer}>
              <img
                src={jumpingKorea}
                width="80%"
                height="80%"
                className={styles.logo_jumpingKorea}
              ></img>
            </div>
            <div className={styles.sponcer}>
              <img
                src={jumpingKorea}
                width="80%"
                height="80%"
                className={styles.logo_jumpingKorea}
              ></img>
            </div>
            <div className={styles.sponcer}>
              <img
                src={jumpingKorea}
                width="80%"
                height="80%"
                className={styles.logo_jumpingKorea}
              ></img>
            </div>
            <div className={styles.sponcer}>
              <img
                src={jumpingKorea}
                width="80%"
                height="80%"
                className={styles.logo_jumpingKorea}
              ></img>
            </div>
            <div className={styles.sponcer}>
              <img
                src={jumpingKorea}
                width="80%"
                height="80%"
                className={styles.logo_jumpingKorea}
              ></img>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeSponcer;
