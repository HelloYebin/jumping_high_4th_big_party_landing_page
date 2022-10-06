import styles from "../styles/thContainer.module.css";
import noticeImg from "../image/notice.png";
import newsImg from "../image/news.JPG";
import jumpingData from "../image/jumpingData.jpg";

function ThContainer() {
  return (
    <div className={styles.thContainer}>
      <div className={styles.thBack}>
        <div className={styles.content}>
          <h1>공지사항</h1>
          <img
            className={styles.noticeImg}
            src={noticeImg}
            height="100%"
            width="100%"
          ></img>
        </div>
        <div className={styles.content}>
          <h1>보도자료</h1>
          <img src={newsImg} width="100%" height="100%"></img>
        </div>
        <div className={styles.content}>
          <h1>점핑자료</h1>
          <img src={jumpingData} width="100%" height="100%"></img>
        </div>
      </div>
    </div>
  );
}
export default ThContainer;
