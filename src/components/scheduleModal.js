import styles from "../styles/scheduleModal.module.css";

export default function ScheduleModal({ changeModal }) {
  return (
    <div>
      <div
        className={styles.bg}
        onClick={() => {
          changeModal(false);
        }}
      ></div>
      <div className={styles.modal}></div>
    </div>
  );
}
