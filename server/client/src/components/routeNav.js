import styles from "../styles/routeNav.module.css";
import { Link } from "react-router-dom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function RouteNav({ current, nav }) {
  const [clickStatus, setClickStatus] = useState(false);
  const navClick = () => {
    setClickStatus(!clickStatus);
  };

  const summaryList = [
    { id: 1, link: "/intro/summary", body: "행사 개요" },
    { id: 2, link: "/intro/history", body: "행사 히스토리" },
    { id: 3, link: "/intro/invite", body: "초대의 글" },
  ];

  const infoList = [
    { id: 1, link: "/info/schedule", body: "프로그램 일정" },
    { id: 2, link: "/info/prepare", body: "참가자 준비물" },
    { id: 3, link: "/info/location", body: "행사장 위치" },
    { id: 4, link: "/info/booth", body: "부스 안내" },
  ];

  const newsList = [
    { id: 1, link: "/news/notice", body: "공지사항" },
    { id: 2, link: "/news/press", body: "보도자료" },
    { id: 3, link: "/news/jumping", body: "점핑자료" },
  ];

  const lis = [];
  if (nav === "점핑빅파티") {
    for (let i = 0; i < summaryList.length; i++) {
      let t = summaryList[i];
      lis.push(
        <Link key={t.id} to={`${t.link}`} className={styles.lists}>
          <p>{`${t.body}`}</p>
        </Link>
      );
    }
  } else if (nav === "행사안내") {
    for (let i = 0; i < infoList.length; i++) {
      let t = infoList[i];
      lis.push(
        <Link key={t.id} to={`${t.link}`} className={styles.lists}>
          <p>{`${t.body}`}</p>
        </Link>
      );
    }
  } else if (nav === "행사소식") {
    for (let i = 0; i < newsList.length; i++) {
      let t = newsList[i];
      lis.push(
        <Link key={t.id} to={`${t.link}`} className={styles.lists}>
          <p>{`${t.body}`}</p>
        </Link>
      );
    }
  }

  return (
    <nav className={styles.routeNavContainer}>
      <div className={styles.nav}>
        <span>{nav}</span>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>

      <div className={styles.navCurrent} onClick={navClick}>
        <span>{current}</span>
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            className={styles.navArrow}
            style={{ rotate: clickStatus ? "-90deg" : "90deg" }}
          />
        </span>
      </div>
      <div
        className={styles.navList}
        style={{
          display: clickStatus ? "" : "none",
          width:
            nav === "행사소식"
              ? "150px"
              : "" || nav === "점핑빅파티"
              ? "170px"
              : "",
          left: nav === "점핑빅파티" ? "190px" : "",
        }}
      >
        {lis}
      </div>
    </nav>
  );
}
