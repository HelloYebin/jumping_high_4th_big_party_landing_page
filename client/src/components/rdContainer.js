import styles from "../styles/rdContainer.module.css";
import bigparty2016 from "../image/1.png";

import bigparty2017 from "../image/IMG_4829.jpg";
import bigparty2017_2 from "../image/GOPR2471.jpg";
import whiteTranpoline from "../image/white.png";
import { useEffect, useRef } from "react";
import RdJumpingHistory from "./rdJumpingHistory";

import "../font.css";

function RdContainer({ getData, getRdData, rdHorizonValue, rdSvg, dissolve }) {
  const horizontal = useRef();
  const elementHeight = useRef();
  useEffect(() => {
    getData((prev) => ({
      ...prev,
      width: horizontal.current.scrollWidth,
      height: horizontal.current.offsetHeight,
    }));
  }, [horizontal.current]);

  //역대 빅파티
  let pastCotainer = (
    <div className={styles.element}>
      <div className={styles.pastBg}>
        <span>PAST</span>
        <span>BIG PARTY</span>
      </div>
      <div className={styles.pastWrapper}>
        <div className={styles.content}>
          <img src={bigparty2016} className={styles.image} />
          <h4>1st 인천</h4>
        </div>
        <div className={styles.content}>
          <img src={bigparty2017} className={styles.image} />
          <h4>2nd 남양주</h4>
        </div>
        <div className={styles.content}>
          <img src={bigparty2016} className={styles.image} />
          <h4>3rd 홍성</h4>
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
            <div className={styles.element} ref={elementHeight}>
              <h1>점핑피트니스의 역사</h1>
              <RdJumpingHistory />
              <div className={styles.items}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1920 1080"
                  className={styles.curveSvg}
                >
                  <path
                    style={{ strokeDashoffset: rdSvg.line ? 4300 : 2150 }}
                    className={styles.svgPath}
                    d="M1802.35,786.64H986.06c-45.92-3.29-82.67-39.8-85.77-85.73-7.87-116.64,66.12-314.73,76.28-341.28q.87-2.29,1.89-4.52C984,343,1015,264.56,885.62,264.56H213"
                  />
                </svg>
              </div>
            </div>
            {pastCotainer}
            <div className={styles.element}>
              <img
                src={whiteTranpoline}
                className={styles.whiteTranpoline}
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RdContainer;
