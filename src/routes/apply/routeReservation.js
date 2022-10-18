import banner from "../../image/notice.png";
import styles from "./applyStyles/routeReservation.module.css";

export default function RouteReservation() {
  const submitHandle = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    fetch("bookers", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: event.target.name.value,
        number: event.target.tel.value,
        res: "일반",
      }),
    });
  };
  return (
    <>
      <img src={banner} className={styles.banner} width="100%" />
      <div className={styles.reservation}>
        <h1 className={styles.title}>예약하기 창입니다.</h1>
        <hr />
        <form onSubmit={submitHandle}>
          <label>이름 : </label>
          <input name="name" type="text"></input>
          <label>연락처 : </label>
          <input name="tel" type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
}
