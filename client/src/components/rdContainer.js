import styles from "../styles/rdContainer.module.css";
import bigparty2016 from "../image/2016.png";
import bigparty2017 from "../image/2017.png";
import bigparty2018 from "../image/2018.png";
import whiteTranpoline from "../image/white.png";
import trampolineIcon from "../image/trampoline_history.png";
import { useEffect, useRef } from "react";

import "../font.css";

function RdContainer({ getData, getRdData, rdHorizonValue }) {
  const horizontal = useRef();
  const elementHeight = useRef();
  useEffect(() => {
    getData((prev) => ({
      ...prev,
      width: horizontal.current.scrollWidth,
      height: horizontal.current.offsetHeight,
    }));
  }, [horizontal.current]);

  let historyContainer = (
    <div className={styles.element} ref={elementHeight}>
      <span>
        <h1 style={{ marginLeft: "50px" }} className={styles.historyTitle}>
          점핑피트니스의 <br />
          역사
        </h1>
      </span>
      <img
        src={trampolineIcon}
        className={styles.trampolineIcon}
        alt="trampoline"
      />
      <svg
        className={styles.arrowSvg}
        id="레이어_1"
        data-name="레이어 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
      >
        <path
          className={styles.arrowPath}
          d="M256.43,29.57s-37,84.4-96.81,116.19c-21.93,11.64-41.13-8.19-30.23-41.2.16-.46,2.94-4.52,3.25-4.92,0,0,25.77-17.52,31.83,33.51,0,0,4.57,49.22-71.22,77.92l-8-16.46-9.44-19.4L50.28,228.52l59.78,16.92L86,196.16"
        />
      </svg>
    </div>
  );
  //역대 빅파티
  let pastCotainer = (
    <div className={styles.element}>
      <div className={styles.pastBg}>
        <span>PAST</span>
        <span>BIG PARTY</span>
      </div>
      <div className={styles.pastWrapper}>
        <div className={styles.content}>
          <img src={bigparty2016} className={styles.image} alt="2016bigparty" />
          <h4>1st 빅파티 - 인천</h4>
        </div>
        <div className={styles.content}>
          <img src={bigparty2017} className={styles.image} alt="2017bigparty" />
          <h4>2nd 빅파티 - 남양주</h4>
        </div>
        <div className={styles.content}>
          <img src={bigparty2018} className={styles.image} alt="2018bigparty" />
          <h4>3rd 빅파티 - 홍성</h4>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.rdContainer}>
      <section
        className={styles.horizontalSection}
        style={{ height: `${getRdData.width}px` }}
      >
        <div className={styles.stickyWrapper}>
          <div
            className={styles.elementWrapper}
            ref={horizontal}
            style={{ transform: `translateX(-${rdHorizonValue}px)` }}
          >
            {historyContainer}
            {pastCotainer}
            <div className={styles.element}>
              <img
                src={whiteTranpoline}
                className={styles.whiteTranpoline}
                alt="whiteTranpoline"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RdContainer;
