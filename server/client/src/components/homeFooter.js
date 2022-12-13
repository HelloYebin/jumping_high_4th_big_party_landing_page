import styles from "../styles/homeFooter.module.css";

import footerLogo from "../image/logo.png";
import { faHouse, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomeApply({ dissolve }) {
  return (
    <div className={styles.footerBg}>
      <div
        className={styles.applyContainer}
        style={{
          display: dissolve ? "" : "none",
        }}
      >
        <div className={styles.logos}>
          <img src={footerLogo} className={styles.footerLogo} alt="logo"></img>
        </div>
        <div className={styles.links}>
          <a
            href="https://www.youtube.com/c/JumpingHighKOREA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className={styles.link} />
          </a>
          <a
            href="https://www.instagram.com/jumpinghigh_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.link} />
          </a>
          <a
            href="https://blog.naver.com/jumpingkor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBlog} className={styles.link} />
          </a>
          <a
            href="https://jumping-high.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faHouse} className={styles.link} />
          </a>
        </div>
      </div>
      <span
        className={styles.copyright}
        style={{
          opacity: dissolve ? "1" : "0",
        }}
      >
        JUMPINGHIGH © 2014. All Rights Reserved.
      </span>
    </div>
  );
}

export default HomeApply;
