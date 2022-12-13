import styles from "../styles/thContainer.module.css";
import Map from "../components/map";
import ThBox from "./thBox";

function ThContainer({ dissolve }) {
  return (
    <div
      className={styles.thContainer}
      style={{ backgroundColor: dissolve ? "white" : "#181818" }}
    >
      <div className={styles.thBody}>
        <ThBox
          dissolve={dissolve}
          item={"schedule"}
          title={"프로그램일정"}
          desc={`여기는 프로그램 일정 입니다.<br />ggㅎㅎ`}
          link={"/info/schedule"}
        />
        <div
          className={styles.content}
          style={{ backgroundColor: dissolve ? "#181818" : "white" }}
        >
          <h1
            style={{ color: dissolve ? "white" : "#181818" }}
            className={styles.BoxTitle}
          >
            행사장위치
          </h1>
          <div className={styles.contentBody}>
            <div className={styles.mapBody}>
              <Map />
            </div>
            <h4
              className={styles.mapDesc}
              style={{ color: dissolve ? "white" : "#181818" }}
            >
              주소 : 대전 서구 둔산대로 169
            </h4>
          </div>
          <span>
            <a
              href="https://map.kakao.com/?itemId=14543526"
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className={styles.mapDetail}>지도보기</button>
            </a>
          </span>
        </div>
        <ThBox
          dissolve={dissolve}
          item={"booth"}
          title={"부스안내"}
          desc={`여기는 부스 설명란입니다..<br />ggㅎㅎ`}
          link={"/info/booth"}
        />
      </div>
    </div>
  );
}
export default ThContainer;
