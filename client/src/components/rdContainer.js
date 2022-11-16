import styles from "../styles/rdContainer.module.css";
import bigparty2016 from "../image/1.png";
import bigparty2016_2 from "../image/2.png";
import bigparty2017 from "../image/IMG_4829.jpg";
import bigparty2017_2 from "../image/GOPR2471.jpg";
import whiteTranpoline from "../image/white.png";
import { useEffect, useRef } from "react";

import "../font.css";

function RdContainer({
  getData,
  getRdHorizontalLength,
  rdHorizonValue,
  pastValue,
}) {
  const horizontal = useRef();

  useEffect(() => {
    getData(horizontal.current.scrollWidth);
  }, [horizontal.current]);

  let pastContainer = (
    <div className={styles.element}>
      <div className={styles.past}>
        <div className={styles.pastContent}>
          <h2
            className={styles.pastTitle}
            style={{
              transform: pastValue.firTitle
                ? `translateX(0px)`
                : `translateX(100px)`,
              opacity: pastValue.firTitle ? 1 : 0,
            }}
          >
            1회 빅파티
          </h2>
          <div className={styles.pastBody}>
            <img
              className={styles.firPic}
              src={bigparty2016}
              width="600px"
              style={{
                transform: pastValue.firBody
                  ? `translateX(0px)`
                  : `translateX(100px)`,
                opacity: pastValue.firBody ? 1 : 0,
              }}
            ></img>
            <img
              className={styles.secPic}
              src={bigparty2016_2}
              width="600px"
              style={{
                transform: pastValue.firBodyNext
                  ? `translateX(0px)`
                  : `translateX(100px)`,
                opacity: pastValue.firBodyNext ? 1 : 0,
              }}
            ></img>
          </div>
        </div>
        <div className={styles.secondBigParty}>
          <h2
            className={styles.pastTitle}
            style={{
              transform: pastValue.secTitle
                ? `translateX(0px)`
                : `translateX(100px)`,
              opacity: pastValue.secTitle ? 1 : 0,
            }}
          >
            2회 빅파티
          </h2>
          <div className={styles.pastBody}>
            <img
              src={bigparty2017}
              width="500px"
              className={styles.firPic2017}
              style={{
                transform: pastValue.secBody
                  ? `translateX(0px)`
                  : `translateX(100px)`,
                opacity: pastValue.secBody ? 1 : 0,
              }}
            ></img>
            <img
              className={styles.secPic2017}
              src={bigparty2017_2}
              width="500px"
              height="300px"
              style={{
                transform: pastValue.secBodyNext
                  ? `translateX(0px)`
                  : `translateX(100px)`,
                opacity: pastValue.secBodyNext ? 1 : 0,
              }}
            ></img>
          </div>
        </div>
        <div className={styles.thirdBigParty}>
          <h2
            className={styles.pastTitle}
            style={{
              transform: pastValue.rdTitle
                ? `translateX(0px)`
                : `translateX(100px)`,
              opacity: pastValue.rdTitle ? 1 : 0,
            }}
          >
            3회 빅파티
          </h2>
          <div className={styles.pastBody}>
            <img
              src={bigparty2017}
              width="400px"
              className={styles.firPic}
              style={{
                transform: pastValue.rdBody
                  ? `translateX(0px)`
                  : `translateX(100px)`,
                opacity: pastValue.rdBody ? 1 : 0,
              }}
            ></img>
            <img
              src={bigparty2017_2}
              width="400px"
              className={styles.secPic}
              style={{
                transform: pastValue.rdBodyNext
                  ? `translateX(0px)`
                  : `translateX(100px)`,
                opacity: pastValue.rdBodyNext ? 1 : 0,
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className={styles.rdContainer}>
      <section
        className={styles.horizontalSection}
        style={{ height: `${getRdHorizontalLength}px` }}
      >
        <div className={styles.stickyWrapper}>
          <div
            className={styles.elementWrapper}
            ref={horizontal}
            style={{ transform: `translateX(-${rdHorizonValue}px)` }}
          >
            <div className={styles.element}>
              <h1>역대 빅파티1</h1>
            </div>
            {pastContainer}
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
