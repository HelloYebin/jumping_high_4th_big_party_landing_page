import styles from "../styles/rdContainer.module.css";
import schedule from "../image/schedule.png";
import map from "../image/map.png";
import Map from "../components/map";

function RdContainer() {
  return (
    <div className={styles.rdContainer}>
      <div className={styles.rdBack}>
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
          <button className={styles.detail}>
            <a>자세히보기</a>
          </button>
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

          <button className={styles.detail}>
            <a>지도보기</a>
          </button>
        </div>
        <div className={styles.content}>
          <h1>준비물 및 짐 보관 안내</h1>
          <Map />
          <button className={styles.detail}>
            <a>자세히보기</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default RdContainer;
