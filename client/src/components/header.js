import styles from "../styles/header.module.css";
import { useEffect } from "react";
import { useState } from "react";
import headerLogo from "../image/logo.png";
import { Link } from "react-router-dom";

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
    <nav
      className={styles.headerContainer}
      onMouseEnter={overHandle}
      onMouseLeave={leaveHandle}
      style={{ top: scroll ? "-70px" : "0px", opacity: scroll ? "0" : "1" }}
    >
      <Link to="/">
        <img
          src={headerLogo}
          width="120px"
          height="80px"
          className={styles.logo}
        />
      </Link>
      <div className={styles.headerContent}>
        <ul className={styles.headerList}>
          <li className={styles.lists}>
            <Link
              to="/intro/summary"
              className={styles.toApply}
              style={{ color: overMouse ? "#59CE8F" : "white" }}
            >
              <p>점핑빅파티</p>
            </Link>
            <ul className={styles.dep2}>
              <li>행사 개요</li>
              <li>행사 히스토리</li>
              <li>초대의 글</li>
            </ul>
          </li>
          <li className={styles.lists}>
            <Link
              to="/info/schedule"
              className={styles.toApply}
              style={{ color: overMouse ? "#59CE8F" : "white" }}
            >
              <p>행사안내</p>
            </Link>
            <ul className={styles.dep2}>
              <li>프로그램 일정</li>
              <li>참가자 준비물</li>
              <li>행사장 위치</li>
              <li>부스 안내</li>
            </ul>
          </li>
          <li className={styles.lists}>
            <Link
              to="/news/notice"
              className={styles.toApply}
              style={{ color: overMouse ? "#59CE8F" : "white" }}
            >
              <p>행사소식</p>
            </Link>
            <ul className={styles.dep2}>
              <li>공지사항</li>
              <li>보도자료</li>
              <li>점핑자료</li>
            </ul>
          </li>
          <li className={styles.lists}>
            <Link
              to="/apply"
              className={styles.toApply}
              style={{ color: overMouse ? "#59CE8F" : "white" }}
            >
              <p>참가신청</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
