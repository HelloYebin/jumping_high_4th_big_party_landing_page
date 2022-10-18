import styles from "../styles/rdContainer.module.css";
import schedule from "../image/schedule.png";
import Map from "../components/map";
import { useState } from "react";
import ScheduleModal from "./scheduleModal";
import "../font.css";

function RdContainer() {
  const [modal, setModal] = useState(false);

  const changeModal = (value) => {
    setModal(value);
  };

  const scheduleDetail = () => {
    setModal(true);
  };
  return (
    <div className={styles.rdContainer}>
      <div className={styles.rdTitle}>
        <a>어서오시게</a>
      </div>
      <div className={styles.rdBody}>
        <div className={styles.content}>
          <h1>프로그램일정</h1>
          <img
            className={styles.schedule}
            width="350px"
            height="270px"
            src={schedule}
          />

          <a>
            <button className={styles.detail} onClick={scheduleDetail}>
              자세히보기
            </button>
          </a>
        </div>
        <div className={styles.content}>
          <h1>행사장위치</h1>
          <Map />
          <h4>주소 : 대전 서구 둔산대로 169</h4>
          <a
            href="https://map.kakao.com/?itemId=14543526"
            target={"_blank"}
            style={{ color: "white", textDecoration: "none" }}
          >
            <button className={styles.detail}>지도보기</button>
          </a>
        </div>
        <div className={styles.content}>
          <h1>부스 안내</h1>
          <Map />
          <h4>
            주소 : 서울특별시 ~~ <br />
            주차장 : 서울특별시 ~~
          </h4>

          <a
            href="https://map.kakao.com/?itemId=26785200"
            target={"_blank"}
            style={{ color: "white", textDecoration: "none" }}
          >
            <button className={styles.detail}>지도보기</button>
          </a>
        </div>
      </div>
      {modal ? <ScheduleModal changeModal={changeModal} /> : ""}
    </div>
  );
}
export default RdContainer;
