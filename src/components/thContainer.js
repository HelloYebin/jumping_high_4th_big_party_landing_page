import styles from "../styles/thContainer.module.css";

function ThContainer() {
  return (
    <div className={styles.thContainer}>
      <div className={styles.thBack}>
        <div className={styles.content}>
          <h1>공지사항</h1>
        </div>
        <div className={styles.content}>
          <h1>보도자료</h1>
        </div>
        <div className={styles.content}>
          <h1>점핑자료</h1>
        </div>
      </div>
    </div>
  );
}
export default ThContainer;
