import styles from "../styles/ndContainer.module.css";
import icon2 from "../image/jumping_icons_2.png";
import { useState, useEffect } from "react";

function NdContainer() {
  const [scroll, setScroll] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 3300px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 600) {
      setScroll(true);
    } else if (window.scrollY < 600) {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }

    if (window.scrollY >= 800) {
      setBodyScroll(true);
    } else if (window.scrollY < 800) {
      setBodyScroll(false);
    }
  };

  return (
    <div className={styles.ndContainer}>
      <div className={styles.slider}>
        <p className={styles.slide}>
          — 4TH — BIGPARTY — JUMPING — FESTIVAL — DAEJEON&nbsp;
        </p>
        <p className={styles.slide}>
          — 4TH — BIGPARTY — JUMPING — FESTIVAL — DAEJEON&nbsp;
        </p>
        <p className={styles.slide}>
          — 4TH — BIGPARTY — JUMPING — FESTIVAL — DAEJEON&nbsp;
        </p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.ndBody}>
          <span
            className={styles.bodyTitle}
            style={{
              transform: scroll ? `translateY(0)` : `translateY(100px)`,
              opacity: scroll ? "1" : "0",
            }}
          >
            Welcome to BigParty
          </span>
          <p
            className={styles.invitation}
            style={{
              transform: bodyScroll ? `translateY(0)` : `translateY(100px)`,
              opacity: bodyScroll ? "1" : "0",
            }}
          >
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
        {/* 빅파티 로고 */}
        <div className={styles.ndLogoContainer}>
          <img className={styles.ndLogo} alt="logo" src={icon2} />
        </div>
      </div>
    </div>
  );
}
export default NdContainer;
