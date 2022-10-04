import styles from "../styles/apply.module.css";

function Apply() {
  return (
    <div className={styles.applyContainer}>
      <div className={styles.bg}>
        <div className={styles.logos}>
          <h1>점핑하이 로고들 & 후원사</h1>
        </div>
        <div className={styles.apply}>
          <h1>참가신청</h1>
          <div className={styles.buttons}>
            <button>얼리버드 예약</button>
            <button>일반 예약</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply;
