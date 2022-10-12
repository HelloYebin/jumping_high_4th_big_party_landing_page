import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "./newsStyles/routePress.module.css";
import PressContent from "./pressContent";
import newsPic from "../../image/news.JPG";
export default function RoutePress() {
  return (
    <>
      <div className={styles.pressContainer}>
        <img src={banner} className={styles.banner} width="100%" />
        <RouteNav nav={"행사소식"} current={"보도자료"} />
        <div className={styles.notice}>
          <h1 className={styles.title}>보도자료</h1>
          <div className={styles.body}>
            <PressContent title={"빅파티 4회 개최"} imgSrc={newsPic} />
            <PressContent title={"보도자료 제목입니다."} imgSrc={newsPic} />
            <PressContent
              title={"국대 출신이 어쩌다…박태환"}
              imgSrc={newsPic}
            />
            <PressContent title={"축제의 장 펼쳐진다."} imgSrc={newsPic} />
            <PressContent
              title={"[CEO 칼럼] 메타버스 ‘오시리아 플랫폼’"}
              imgSrc={newsPic}
            />
            <PressContent
              title={"노화와 영양, 그리고 수명 연장"}
              imgSrc={newsPic}
            />
            <PressContent
              title={"가수 강민경이 65억원 규모의 빌딩을 매입"}
              imgSrc={newsPic}
            />
            <PressContent
              title={"담수식물 좀개갓냉이, 아토피 개선 효능 발견"}
              imgSrc={newsPic}
            />
          </div>
        </div>
      </div>
    </>
  );
}
