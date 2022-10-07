import styles from "../styles/home.module.css";
import bg from "../video/1122.mp4";
import Interval from "../components/Interval";
import NdContainer from "../components/ndContainer";
import RdContainer from "../components/rdContainer";
import ThContainer from "../components/thContainer";
import Apply from "../components/apply";
import Sponcer from "../components/sponcer";
import upLogo from "../image/logo.png";
import { useState } from "react";
function Home() {
  const [scrollY, setScrollY] = useState(0);
  const pageUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollY(0);
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
      <Interval />
      <NdContainer />
      <RdContainer />
      <ThContainer />
      <Sponcer />
      <Apply />
    </>
  );
}
export default Home;
