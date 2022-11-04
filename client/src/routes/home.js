import styles from "../styles/home.module.css";
import bg from "../video/1122.mp4";
import HomeInterval from "../components/homeInterval";
import NdContainer from "../components/ndContainer";
import RdContainer from "../components/rdContainer";
import ThContainer from "../components/thContainer";
import HomeApply from "../components/homeApply";
import HomeSponcer from "../components/homeSponcer";
import upLogo from "../image/logo.png";
import { useState } from "react";
function Home() {
  const pageUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.upLogo} onClick={pageUpClick}>
        <img src={upLogo} width="60px" height="40px" />
      </div>
      {/* <Video /> */}
      <div className={styles.container}>
        <video muted autoPlay loop className={styles.bgVideo}>
          <source src={bg} type="video/mp4" />
        </video>
        <div className={styles.black}></div>
      </div>
      <HomeInterval />
      <NdContainer />
      <RdContainer />
      {/* <ThContainer /> */}
      <HomeSponcer />
      <HomeApply />
    </>
  );
}
export default Home;
