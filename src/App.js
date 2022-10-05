import styles from "./App.module.css";
import bg from "./video/1122.mp4";
import Interval from "./components/Interval";
import NdContainer from "./components/ndContainer";
import RdContainer from "./components/rdContainer";
import ThContainer from "./components/thContainer";
import Apply from "./components/apply";
import { useRef } from "react";

function App() {
  return (
    <div>
      {/* <Video /> */}
      <div className={styles.container}>
        <video muted autoPlay loop className={styles.bgVideo}>
          <source src={bg} type="video/mp4" />
        </video>
        <div className={styles.black}></div>
      </div>
      <Interval />
      <NdContainer />
      <RdContainer />
      <ThContainer />
      <Apply />
    </div>
  );
}

export default App;
