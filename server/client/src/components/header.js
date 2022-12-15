import styles from "../styles/header.module.css";
import { useEffect, useState } from "react";
import headerLogo from "../image/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Headerlist from "./headerList";

export default function Header() {
  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);
  const [overMouse, setOverMouse] = useState(false);
  const [barToggle, setBarToggle] = useState(false);

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
    <>
      <nav
        className={styles.headerContainer}
        onMouseEnter={overHandle}
        onMouseLeave={leaveHandle}
        style={{ top: scroll ? "-70px" : "0px", opacity: scroll ? "0" : "1" }}
      >
        <Link to="/">
          <img src={headerLogo} className={styles.logo} alt="logo" />
        </Link>

        <div className={styles.headerContent}>
          <ul className={styles.headerList}>
            <Headerlist
              overMouse={overMouse}
              list="점핑빅파티"
              link="/intro/summary"
            />
            <Headerlist
              overMouse={overMouse}
              ss
              list="행사안내"
              link="/info/schedule"
            />
            <Headerlist
              overMouse={overMouse}
              list="행사소식"
              link="/news/notice"
            />
            <Headerlist overMouse={overMouse} list="참가신청" link="/apply" />
          </ul>
        </div>
        {/* max-width: 1023px 일때 block */}
        <FontAwesomeIcon
          icon={faBars}
          className={styles.bars}
          onClick={() => {
            setBarToggle(!barToggle);
          }}
        />
      </nav>
      <div
        className={barToggle ? styles.showBackGround : styles.hiedBackGround}
      >
        <FontAwesomeIcon
          icon={faX}
          className={styles.faX}
          onClick={() => {
            setBarToggle(!barToggle);
          }}
        />
        <ul className={styles.responsiveList}>
          <li
            className={styles.resLists}
            onClick={() => {
              setBarToggle(false);
            }}
          >
            <Link
              to="/intro/summary"
              className={styles.resLink}
              style={{ color: overMouse ? "#59CE8F" : "white" }}
            >
              <p className={styles.resBtn}>점핑빅파티</p>
            </Link>
          </li>
          <li
            className={styles.resLists}
            onClick={() => {
              setBarToggle(false);
            }}
          >
            <Link
              to="/info/schedule"
              className={styles.resLink}
              style={{ color: overMouse ? "#59CE8F" : "white" }}
            >
              <p className={styles.resBtn}>행사안내</p>
            </Link>
          </li>
          <li
            className={styles.resLists}
            onClick={() => {
              setBarToggle(false);
            }}
          >
            <Link
              to="/news/notice"
              className={styles.resLink}
              style={{ color: overMouse ? "#59CE8F" : "white" }}
            >
              <p className={styles.resBtn}>행사소식</p>
            </Link>
          </li>
          <li
            className={`${styles.resLists} ${styles.applyBtn}`}
            onClick={() => {
              setBarToggle(false);
            }}
          >
            <Link
              to="/apply"
              className={styles.resLink}
              style={{ color: overMouse ? "#59CE8F" : "white" }}
            >
              <p className={styles.resBtn}>참가신청</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
