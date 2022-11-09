import styles from "../styles/modal.module.css";
import schedule from "../image/schedule.png";
import boothImg from "../image/booth1.png";

export default function Modal({ changeModal, mode }) {
  console.log(mode);
  let modalImage;
  if (mode === "schedule") {
    modalImage = (
      <img
        src={schedule}
        width="900px"
        height="700px"
        className={styles.modalImg}
      ></img>
    );
  } else if (mode === "booth") {
    modalImage = (
      <img
        src={boothImg}
        width="700px"
        height="800px"
        className={styles.modalImg}
      ></img>
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
