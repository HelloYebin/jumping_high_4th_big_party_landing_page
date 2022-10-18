import styles from "../styles/homeApply.module.css";
import { useState } from "react";
import footerLogo from "../image/logo.png";
import { faHouse, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function HomeApply() {
  return (
    <div className={styles.bg}>
      <div className={styles.applyContainer}>
        <div className={styles.logos}>
          <img src={footerLogo} width="300px" height="200px"></img>
        </div>
        <div className={styles.links}>
          <Link>
            <FontAwesomeIcon icon={faYoutube} className={styles.link} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faInstagram} className={styles.link} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faBlog} className={styles.link} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faHouse} className={styles.link} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeApply;
{
  //JS
  // const [exp, setExp] = useState(false);
  // const earlybirdOverHandle = () => {
  //   setExp(true);
  // };
  // const earlybirdLeaveHandle = () => {
  //   setExp(false);
  // };
  //return
  /* <div className={styles.apply}>
          <h1>참가신청</h1>
          <div className={styles.buttons}>
            <div
              className={styles.earlybirdExp}
              style={{ opacity: exp ? 1 : 0, left: exp ? "140px" : "120px" }}
            >
              <a>여기는 얼리버드 예약 설명 칸입니다.</a>
            </div>
            <button
              onMouseOver={earlybirdOverHandle}
              onMouseLeave={earlybirdLeaveHandle}
            >
              얼리버드 예약
            </button>
            <button>일반 예약</button>
          </div>
        </div> */
}
