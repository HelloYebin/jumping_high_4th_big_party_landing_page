import styles from "../styles/ndContainer.module.css";
import logo from "../image/logo.png";
import { useState } from "react";

function NdContainer() {
  const [autoRain, setAutoRain] = useState(false);
  setTimeout(() => {
    setAutoRain(true);
  }, 1000);

  return (
    <div className={styles.ndContainer}>
      <div className={styles.ndBack}>
        {/* 빅파티 로고 */}
        <div className={styles.ndLogoContainer}>
          <img
            className={styles.ndLogo}
            src={logo}
            width="400px"
            height="400px"
          />
        </div>
        <div className={styles.center}>
          <a
            className={styles.centerWord}
            style={{ marginTop: autoRain ? "3350px" : "-2600px" }}
          >
            ENJOY4THBIGPARTYDAEJEONENJOY4THBIGPARTYDAEJEON
          </a>
        </div>
        <div className={styles.ndBody}>
          <a className={styles.bodyTitle}>Welcome to BigParty</a>
          <p className={styles.invitation}>
            Jumping Festa, 점핑하이에 초대합니다! 어느덧 점핑하이가 !! <br />
            주년이 되었고… 빅파티도 ,, 되었는데 더 많은 분들과 건강한 일상의
            공유를 해… <br />
            여러분을 초대합니다. <br />
            누구든지 참여가능한… 초록이 푸르른 6월 한강에서 뵙겠습니다. <br />
            오리지널 점핑 피트니스의 우수성과 대중성을 알리는 동시에,
            <br />
            국민들의 건강증진 및 생활 체육으로의 발전을 위해 점핑 피트니스를
            체험하고 즐길 수 있는 장을 마련하였습니다.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
export default NdContainer;
