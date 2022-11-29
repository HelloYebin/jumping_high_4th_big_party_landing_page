import styles from "../styles/rdContainer.module.css";
import bigparty2016_2 from "../image/2.png";

export default function RdJumpingHistory({ rdSvg }) {
  return (
    <>
      <div className={styles.itemTop}>
        <div className={styles.item} style={{ opacity: rdSvg.line ? 1 : 0 }}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li>점핑피트니스의 태동</li>
            <li>2001</li>
          </ul>
        </div>
        <div className={styles.item}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li>점핑브랜드 로고 등록</li>
            <li>2005</li>
          </ul>
        </div>
        <div className={styles.item}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li>육각 트램폴린의 발명</li>
            <li>2010</li>
          </ul>
        </div>
      </div>

      <div className={styles.itemMiddle}>
        <div className={styles.item} style={{ opacity: 0 }}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.item}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li>독일 FIBO 진출</li>
            <li>2011</li>
          </ul>
        </div>
        <div className={styles.item}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li>점핑하이 설립</li>
            <li>2014</li>
          </ul>
        </div>
      </div>

      <div className={styles.itemBottom}>
        <div className={styles.item}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li>1회 빅파티</li>
            <li>2016</li>
          </ul>
        </div>
        <div className={styles.item}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li>2회 빅파티</li>
            <li>2017</li>
          </ul>
        </div>
        <div className={styles.item}>
          <img src={bigparty2016_2} width="200px" />
          <ul>
            <li>3회 빅파티</li>
            <li>2018</li>
          </ul>
        </div>
      </div>
    </>
  );
}
