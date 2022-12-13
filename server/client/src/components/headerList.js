import { Link } from "react-router-dom";
import ToGo from "./toGo";
import styles from "../styles/header.module.css";

export default function Headerlist({ overMouse, list, link }) {
  let content = null;
  if (list === "점핑빅파티") {
    content = (
      <ul className={styles.dep2}>
        <ToGo link="/intro/summary" nav="행사개요" />
        <ToGo link="/intro/history" nav="행사 히스토리" />
        <ToGo link="/intro/invite" nav="초대의 글" />
      </ul>
    );
  } else if (list === "행사안내") {
    content = (
      <ul className={styles.dep2}>
        <ToGo link="/info/schedule" nav="프로그램 일정" />
        <ToGo link="/info/prepare" nav="참가자 준비물" />
        <ToGo link="/info/location" nav="행사장 위치" />
        <ToGo link="/info/booth" nav="부스 안내" />
      </ul>
    );
  } else if (list === "행사소식") {
    content = (
      <ul className={styles.dep2}>
        <ToGo link="/news/notice" nav="공지사항" />
        <ToGo link="/news/press" nav="점핑자료" />
        {/* <ToGo link="/news/jumping" nav="점핑자료" /> */}
      </ul>
    );
  }

  return (
    <li className={styles.lists}>
      <Link
        to={link}
        className={styles.toApply}
        style={{ color: overMouse ? "#59CE8F" : "white" }}
      >
        <p>{list}</p>
      </Link>
      {content}
    </li>
  );
}
