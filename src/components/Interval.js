import { useState, useEffect, useRef } from "react";
import styles from "../styles/interval.module.css";

function Interval() {
  let [dDay, setDDay] = useState(true);
  let intervalTimer;
  let [countDay, setCountDay] = useState("");
  let [countHour, setCountHour] = useState("");
  let [countMin, setCountMin] = useState("");
  let [countSec, setCountSec] = useState("");

  const [exp, setExp] = useState(false);
  const earlybirdOverHandle = () => {
    setExp(true);
  };
  const earlybirdLeaveHandle = () => {
    setExp(false);
  };
  useEffect(() => {
    intervalTimer = setInterval(() => {
      //D-day 설정
      const dDayTime = new Date("2022-12-25, 00:00:00");
      let todayTime = new Date();
      let diff = dDayTime - todayTime;
      let countDown = Math.floor(diff / 1000);

      //날
      let day = Math.floor(diff / (1000 * 60 * 60 * 24));
      setCountDay(day);

      //시간
      let hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
      setCountHour(hour);

      //분
      let min = Math.floor((diff / (1000 * 60)) % 60);
      setCountMin(min);
      // 초
      let sec = Math.floor((diff / 1000) % 60);
      setCountSec(sec);
      if (countDown <= 0) {
        setDDay(false);
        clearInterval(intervalTimer);
      }
    }, 1000);
  }, []);

  return (
    <div className={styles.dDay}>
      <ul className={styles.countDown}>
        <div>
          <h1>Countdown to BigParty</h1>
        </div>
        <ul className={styles.countDownTime}>
          {dDay ? (
            <li>
              <div className={styles.times}>{`${countDay}`}</div>
              <span className={styles.countDownLabel}>일</span>
            </li>
          ) : (
            ""
          )}

          {dDay ? (
            <li>
              <div className={styles.times}>{`${countHour}`}</div>
              <span className={styles.countDownLabel}>시간</span>
            </li>
          ) : (
            ""
          )}

          {dDay ? (
            <li>
              <div className={styles.times}>{`${countMin}`}</div>
              <span className={styles.countDownLabel}>분</span>
            </li>
          ) : (
            ""
          )}
          {dDay ? (
            <li>
              <div className={styles.times}>{`${countSec}`}</div>
              <span className={styles.countDownLabel}>초</span>
            </li>
          ) : (
            ""
          )}
        </ul>
      </ul>
      <div className={styles.buttons}>
        <div
          className={styles.earlybirdExp}
          style={{ opacity: exp ? 1 : 0, left: exp ? "-220px" : "-240px" }}
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
  );
}
export default Interval;
