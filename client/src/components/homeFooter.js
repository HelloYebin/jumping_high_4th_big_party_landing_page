import styles from "../styles/homeFooter.module.css";
import { useEffect, useState } from "react";
import footerLogo from "../image/logo.png";
import { faHouse, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomeApply() {
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
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };
  return (
    <div className={styles.bg}>
      <div
        className={styles.applyContainer}
        style={{
          opacity: scroll ? "1" : "0",
        }}
      >
        <div className={styles.logos}>
          <img src={footerLogo} width="300px" height="200px" alt="logo"></img>
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
      <a
        className={styles.copyright}
        style={{
          opacity: scroll ? "1" : "0",
        }}
      >
        JUMPINGHIGH © 2014. All Rights Reserved.
      </a>
    </div>
  );
}

export default HomeApply;
