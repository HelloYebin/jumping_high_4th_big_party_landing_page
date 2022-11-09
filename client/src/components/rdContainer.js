import styles from "../styles/rdContainer.module.css";
import schedule from "../image/schedule.png";
import booth from "../image/booth1.png";
import image from "../image/main-s1.png";
import bg from "../image/redb.png";
import Map from "../components/map";
import { useRef, useState } from "react";
import Modal from "./modal";
import "../font.css";

function RdContainer() {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState("");
  const imageRef = useRef();
  const textRef = useRef();
  const bgRef = useRef();
  const changeModal = (value) => {
    setModal(value);
  };

  const scheduleDetail = () => {
    setModal(true);
    setMode("schedule");
  };

  const boothDetail = () => {
    setModal(true);
    setMode("booth");
  };

  window.addEventListener("scroll", function () {
    const value = window.scrollY;
    bgRef.current.style.top = value * 0.3 + "px";
    textRef.current.style.top = value * 0.33 + "px";
  });

  return (
    <div className={styles.rdContainer}>
      <div className={styles.bgContainer}>
        <img id={styles.image} src={image} ref={imageRef} />
        <a id={styles.text} ref={textRef}>
          BIG PARTY
        </a>
        <img id={styles.bg} src={bg} ref={bgRef} />
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
          <h4>여기는 프로그램 일정 입니다.</h4>
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
          <img
            className={styles.schedule}
            width="350px"
            height="270px"
            src={booth}
          />
          <h4>여기는 부스 설명란입니다.</h4>

          <a>
            <button className={styles.detail} onClick={boothDetail}>
              자세히보기
            </button>
          </a>
        </div>
      </div>
      {modal ? <Modal changeModal={changeModal} mode={mode} /> : ""}
    </div>
  );
}
export default RdContainer;
