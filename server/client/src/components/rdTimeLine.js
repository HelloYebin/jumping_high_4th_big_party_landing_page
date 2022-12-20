import styles from "../styles/rdContainer.module.css";

export default function RdTimeLine({ year, body, image }) {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineYear}>
        <h1>{year}</h1>
      </div>
      <div className={styles.timelineBody}>
        <img src={image} width="100px" height={100}></img>
        <h1>{body}</h1>
      </div>
    </div>
  );
}
