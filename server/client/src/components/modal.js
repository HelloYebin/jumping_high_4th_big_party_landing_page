import styles from "../styles/modal.module.css";
import schedule from "../image/schedule.png";
import boothImg from "../image/booth1.png";

export default function Modal({ changeModal, mode }) {
  let modalImage;
  if (mode === "schedule") {
    modalImage = (
      <img src={schedule} className={styles.modalImg} alt="scheduleImg"></img>
    );
  } else if (mode === "booth") {
    modalImage = (
      <img src={boothImg} className={styles.modalImg} alt="boothImg"></img>
    );
  }

  return (
    <div>
      <div
        className={styles.bg}
        onClick={() => {
          changeModal(false);
        }}
      ></div>
      <div className={styles.modal}>{modalImage}</div>
    </div>
  );
}
