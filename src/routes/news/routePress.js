import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "./newsStyles/routePress.module.css";
import { Link } from "react-router-dom";
import db from "../../db/data.json";

export default function RoutePress() {
  // const articles = [
  //   { id: 1, title: "빅파티 4회 개최", src: newsPic },
  //   { id: 2, title: "보도자료 제목입니다.", src: newsPic },
  //   { id: 3, title: "국대 출신이 어쩌다…박태환", src: newsPic },
  //   { id: 4, title: "축제의 장 펼쳐진다.", src: newsPic },
  //   { id: 5, title: "[CEO 칼럼] 메타버스 ‘오시리아 플랫폼’", src: newsPic },
  //   { id: 6, title: "노화와 영양, 그리고 수명 연장", src: newsPic },
  //   { id: 7, title: "가수 강민경이 65억원 규모의 빌딩을 매입", src: newsPic },
  //   {
  //     id: 8,
  //     title: "담수식물 좀개갓냉이, 아토피 개선 효능 발견",
  //     src: newsPic,
  //   },
  // ];
  return (
    <>
      <div className={styles.pressContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"행사소식"} current={"보도자료"} />
        <div className={styles.notice}>
          <h1 className={styles.noticeTitle}>보도자료</h1>
          <div className={styles.body}>
            {db.presses.map((press) => (
              <Link
                to={`/news/press/${press.id}`}
                key={press.id}
                className={styles.articleTitle}
              >
                <div className={styles.pressContent}>
                  <h1>{press.title}</h1>
                  <div className={styles.imgContainer}>
                    <img width="450px" height="500px" className={styles.img} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
