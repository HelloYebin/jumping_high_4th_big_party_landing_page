import { useEffect, useState } from "react";
import styles from "../styles/thContainer.module.css";
import Map from "../components/map";
import schedule from "../image/schedule.png";
import booth from "../image/booth1.png";
import Modal from "./modal";

function ThContainer() {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState("");
  const [scroll, setScroll] = useState(false);
  const scheduleDetail = () => {
    setModal(true);
    setMode("schedule");
  };

  const boothDetail = () => {
    setModal(true);
    setMode("booth");
  };
  const changeModal = (value) => {
    setModal(value);
  };

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
    } else if (window.scrollY < 3300) {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  return (
    <div
      className={styles.thContainer}
      style={{ backgroundColor: scroll ? "white" : "#181818" }}
    >
      <div className={styles.thBody}>
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
            rel="noopener noreferrer"
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
export default ThContainer;
