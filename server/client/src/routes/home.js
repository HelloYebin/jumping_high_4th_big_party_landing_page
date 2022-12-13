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
import { useRef, useState } from "react";

function Home() {
  const thRef = useRef(null);
  const rdRef = useRef(null);
  const footRef = useRef(null);
  const sponcerRef = useRef(null);
  const [thFromTop, setThFromTop] = useState(0);
  const [thScroll, setThScroll] = useState(false);
  const [footerScroll, setFooterScroll] = useState(false);
  const [scroll, setScroll] = useState(0);

  // 가로스크롤
  const [rdFromTop, setRdFromTop] = useState(0);
  const [rdHorizonValue, setRdHorizonValue] = useState(0);
  const [getRdData, setGetRdData] = useState({ width: null, height: null });
  const windowWidth = window.innerWidth;
  const scrollDistance = rdFromTop + getRdData.width - windowWidth;

  window.onscroll = () => {
    let scrollTop = window.scrollY;

    setScroll(scrollTop);
    setThFromTop(thRef.current.offsetTop + thRef.current.scrollHeight / 2);
    setRdFromTop(rdRef.current.offsetTop);

    //th->footer 넘어갈때 배경 디졸브
    if (scrollTop >= thFromTop) {
      setThScroll(true);
    } else {
      setThScroll(false);
    }
    //th->footer 넘어갈때 배경 디졸브
    if (scrollTop >= sponcerRef.current.offsetTop) {
      setFooterScroll(true);
    } else {
      setFooterScroll(false);
    }
    //가로스크롤 값구하기
    if (scrollTop >= rdFromTop && scrollTop <= scrollDistance) {
      setRdHorizonValue(scrollTop - rdFromTop);
    }
  };

  const pageUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.upLogo} onClick={pageUpClick}>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>

      <div className={styles.videoWrap}>
        <video src={bg} muted autoPlay loop className={styles.bgVideo}>
          해당 확장자는 지원하지 않습니다.
          {/* <source src={bg} type="video/mp4" /> */}
        </video>

        <div className={styles.black}></div>
      </div>
      <HomeInterval />
      <NdContainer />
      <div ref={rdRef}>
        <RdContainer
          getData={setGetRdData}
          getRdData={getRdData}
          rdHorizonValue={rdHorizonValue}
          scroll={scroll}
        />
      </div>
      <div ref={thRef}>
        <ThContainer dissolve={thScroll} />
      </div>
      <div ref={sponcerRef}>
        <HomeSponcer dissolve={thScroll} />
      </div>
      <div ref={footRef}>
        <HomeFooter dissolve={footerScroll} />
      </div>
    </>
  );
}
export default Home;
