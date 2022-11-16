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
import { useEffect, useRef, useState } from "react";

function Home() {
  const thRef = useRef(null);
  const rdRef = useRef(null);
  const footRef = useRef(null);
  const sponcerRef = useRef(null);
  const [thFromTop, setThFromTop] = useState(0);
  const [thScroll, setThScroll] = useState(false);
  const [footerScroll, setFooterScroll] = useState(false);

  // 가로스크롤
  const [rdFromTop, setRdFromTop] = useState(0);
  const [rdHorizonValue, setRdHorizonValue] = useState(0);
  const [getRdHorizontalLength, setGetRdHorizontalLength] = useState("");
  const windowWidth = window.innerWidth;
  const scrollDistance = rdFromTop + getRdHorizontalLength - windowWidth;

  //가로스크롤 콘텐츠
  const [pastValue, setPastValue] = useState({
    firTitle: false,
    firBody: false,
    firBodyNext: false,
    secTitle: false,
    secBody: false,
    secBodyNext: false,
    rdTitle: false,
    rdBody: false,
    rdBodyNext: false,
  });

  useEffect(() => {
    setThFromTop(thRef.current.offsetTop + thRef.current.scrollHeight / 2);
  }, [thRef.current]);

  useEffect(() => {
    setRdFromTop(rdRef.current.offsetTop);
  }, [thRef.current]);

  window.onscroll = () => {
    let scrollTop = window.scrollY;

    //past 첫번째 컨텐츠
    if (scrollTop >= rdFromTop + getRdHorizontalLength / 5) {
      setPastValue((prev) => ({ ...prev, firTitle: true }));
    } else {
      setPastValue((prev) => ({ ...prev, firTitle: false }));
    }

    if (scrollTop >= rdFromTop + getRdHorizontalLength / 5 + 150) {
      setPastValue((prev) => ({ ...prev, firBody: true }));
    } else {
      setPastValue((prev) => ({ ...prev, firBody: false }));
    }

    if (scrollTop >= rdFromTop + getRdHorizontalLength / 5 + 250) {
      setPastValue((prev) => ({ ...prev, firBodyNext: true }));
    } else {
      setPastValue((prev) => ({ ...prev, firBodyNext: false }));
    }
    console.log(pastValue.firBodyNext);
    //past 두번째 컨텐츠
    if (scrollTop >= rdFromTop + getRdHorizontalLength / 3.3) {
      setPastValue((prev) => ({ ...prev, secTitle: true }));
    } else {
      setPastValue((prev) => ({ ...prev, secTitle: false }));
    }
    if (scrollTop >= rdFromTop + getRdHorizontalLength / 3.3 + 150) {
      setPastValue((prev) => ({ ...prev, secBody: true }));
    } else {
      setPastValue((prev) => ({ ...prev, secBody: false }));
    }
    if (scrollTop >= rdFromTop + getRdHorizontalLength / 3.3 + 250) {
      setPastValue((prev) => ({ ...prev, secBodyNext: true }));
    } else {
      setPastValue((prev) => ({ ...prev, secBodyNext: false }));
    }
    //past 세번째 컨텐츠
    if (scrollTop >= rdFromTop + getRdHorizontalLength / 2.5) {
      setPastValue((prev) => ({ ...prev, rdTitle: true }));
    } else {
      setPastValue((prev) => ({ ...prev, rdTitle: false }));
    }
    if (scrollTop >= rdFromTop + getRdHorizontalLength / 2.5 + 150) {
      setPastValue((prev) => ({ ...prev, rdBody: true }));
    } else {
      setPastValue((prev) => ({ ...prev, rdBody: false }));
    }
    if (scrollTop >= rdFromTop + getRdHorizontalLength / 2.5 + 250) {
      setPastValue((prev) => ({ ...prev, rdBodyNext: true }));
    } else {
      setPastValue((prev) => ({ ...prev, rdBodyNext: false }));
    }
    console.log(scrollTop);
    console.log("rdFromTop : ", rdFromTop + getRdHorizontalLength / 2.5);
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
      <div className={styles.container}>
        <video muted autoPlay loop className={styles.bgVideo}>
          <source src={bg} type="video/mp4" />
        </video>
        <div className={styles.black}></div>
      </div>
      <HomeInterval />
      <NdContainer />
      <div ref={rdRef}>
        <RdContainer
          getData={setGetRdHorizontalLength}
          getRdHorizontalLength={getRdHorizontalLength}
          rdHorizonValue={rdHorizonValue}
          pastValue={pastValue}
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
