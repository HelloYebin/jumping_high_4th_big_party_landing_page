import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "./newsStyles/routeNotice.module.css";
import NoticeContent from "./noticeContent";
import { useEffect, useState } from "react";
import Axios from "axios";
// import "./newsStyles/reactquill.css";

export default function AdminRouteNotice() {
  const [viewNotice, setViewNotice] = useState([]);

  useEffect(() => {
    Axios.get("/api/get").then((response) => {
      setViewNotice(response.data);
    });
  }, []);

  const content = viewNotice.map((element) => {
    return (
      <NoticeContent
        key={element.id}
        title={element.title}
        body={element.description}
      />
    );
  });

  return (
    <>
      <div className={styles.noticeContainer}>
        <img src={banner} className={styles.banner} width="100%" alt="banner" />
        <RouteNav nav={"행사소식"} current={"공지사항"} />
        <div className={styles.notice}>
          <h1 className={styles.title}>공지사항</h1>
          {content}
        </div>
      </div>
    </>
  );
}
