import { useState } from "react";
import styles from "./App.module.css";
import Video from "./components/Video";
import bg from "./video/1122.mp4";

function App() {
  const [dDay, setDDay] = useState("true");
  const [clock, setClock] = useState("");
  function diffDay() {
    const masTime = new Date("2022-10-01, 10:15:00");
    const todayTime = new Date();
    const diff = masTime - todayTime;
    const countDown = Math.floor(diff / 1000);

    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((diff / (1000 * 60)) % 60);
    const diffSec = Math.floor((diff / 1000) % 60);
    setClock(`D-day : ${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`);
    if (countDown <= 0) {
      setDDay(false);
    }
  }
  setInterval(diffDay, 1000);

  return (
    <div>
      {/* <Video /> */}
      <div className={styles.container}>
        <video muted autoPlay loop className={styles.bgVideo}>
          <source src={bg} type="video/mp4" />
        </video>
      </div>
      <h2 id="dDay">{dDay ? clock : "finished"}</h2>
    </div>
  );
}

export default App;
