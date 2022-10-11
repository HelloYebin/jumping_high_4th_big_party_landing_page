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
    { id: 4, link: "/info/storage", body: "짐 보관 안내" },
  ];
  const lis = [];
  if (nav === "점핑빅파티") {
    for (let i = 0; i < summaryList.length; i++) {
      let t = summaryList[i];
      lis.push(
        <Link key={t.id} to={`${t.link}`}>
          <p>{`${t.body}`}</p>
        </Link>
      );
    }
  } else if (nav === "행사안내") {
    for (let i = 0; i < infoList.length; i++) {
      let t = infoList[i];
      lis.push(
        <Link key={t.id} to={`${t.link}`}>
          <p>{`${t.body}`}</p>
        </Link>
      );
    }
  }
  return (
    <nav className={styles.introNav}>
      <div>
        <a>{nav}</a>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>

      <div className={styles.navSummary} onClick={navClick}>
        <a>{current}</a>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={styles.navArrow}
          style={{ rotate: clickStatus ? "-90deg" : "90deg" }}
        />
      </div>
      <div
        className={styles.navList}
        style={{ display: clickStatus ? "" : "none" }}
      >
        {lis}
      </div>
    </nav>
  );
}