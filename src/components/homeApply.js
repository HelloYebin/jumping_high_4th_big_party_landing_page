import styles from "../styles/homeApply.module.css";
import { useState } from "react";

function HomeApply() {
  const [exp, setExp] = useState(false);
  const earlybirdOverHandle = () => {
    setExp(true);
  };
  const earlybirdLeaveHandle = () => {
    setExp(false);
  };
  return (
    <div className={styles.applyContainer}>
      <div className={styles.apply}>
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
      </div>
    </div>
  );
}

export default HomeApply;
