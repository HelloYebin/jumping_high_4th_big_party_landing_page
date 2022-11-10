import styles from "../styles/home.module.css";
import bg from "../video/1122.mp4";
import HomeInterval from "../components/homeInterval";
import NdContainer from "../components/ndContainer";
import RdContainer from "../components/rdContainer";
import ThContainer from "../components/thContainer";
import HomeFooter from "../components/homeFooter";
import HomeSponcer from "../components/homeSponcer";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ThContainer from "../components/thContainer";

function Home() {
  const pageUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.upLogo} onClick={pageUpClick}>
        <FontAwesomeIcon icon={faChevronUp} />
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
      <ThContainer />
      <HomeSponcer />
      <HomeFooter />
    </>
  );
}
export default Home;
