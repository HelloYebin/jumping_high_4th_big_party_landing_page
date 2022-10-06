import styles from "../styles/header.module.css";
import { useEffect } from "react";
import { useState } from "react";
import headerLogo from "../image/logo.png";

export default function Header() {
  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);
  const [overMouse, setOverMouse] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 110) {
      setScroll(true);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };
  const overHandle = () => {
    setOverMouse(true);
  };
  const leaveHandle = () => {
    setOverMouse(false);
  };
  return (
    <div
      className={styles.headerContainer}
      onMouseEnter={overHandle}
      onMouseLeave={leaveHandle}
      style={{ top: scroll ? "-70px" : "0px", opacity: scroll ? "0" : "1" }}
    >
      <div className={styles.headerContent}>
        <img src={headerLogo} width="120px" height="80px" />
        <ul
          className={styles.headerList}
          style={{ color: overMouse ? "green" : "white" }}
        >
          <li>여기는 헤더입니다.</li>
          <li>점핑빅파티</li>
          <li>행사안내</li>
          <li>행사소식</li>
          <li>참가신청</li>
        </ul>
      </div>
    </div>
  );
}
