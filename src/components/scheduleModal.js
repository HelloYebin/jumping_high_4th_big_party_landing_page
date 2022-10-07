import styles from "../styles/scheduleModal.module.css";
import schedule from "../image/schedule.png";

export default function ScheduleModal({ changeModal }) {
  return (
    <div>
      <div
        className={styles.bg}
        onClick={() => {
          changeModal(false);
        }}
      ></div>
      <div className={styles.modal}>
        <img
          src={schedule}
          width="900px"
          height="700px"
          className={styles.modalImg}
        ></img>
      </div>
    </div>
  );
}
