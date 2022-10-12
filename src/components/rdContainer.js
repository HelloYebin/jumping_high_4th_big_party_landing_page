import styles from "../styles/rdContainer.module.css";
import schedule from "../image/schedule.png";
import map from "../image/map.png";
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
            width="450px"
            height="400px"
            src={schedule}
          />
          <h4>
            클릭하면 모달창 나오게 or 자세히보기 누르면 다른페이지 넘어가게
          </h4>
          <a>
            <button className={styles.detail} onClick={scheduleDetail}>
              자세히보기
            </button>
          </a>
        </div>
        <div className={styles.content}>
          <h1>행사장위치</h1>
          <img className={styles.map} width="450px" height="400px" src={map} />
          <h4>
            주소 : 서울특별시 ~~ <br />
            주차장 : 서울특별시 ~~
            <br />
            지도보기 클릭하면 네이버 지도에 연결되게 구현
          </h4>
          <a>
            <button className={styles.detail}>지도보기</button>
          </a>
        </div>
        <div className={styles.content}>
          <h1>준비물 및 짐 보관 안내</h1>
          <Map />
          <h4>
            주소 : 서울특별시 ~~ <br />
            주차장 : 서울특별시 ~~
            <br />
            지도보기 클릭하면 네이버 지도에 연결되게 구현
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
