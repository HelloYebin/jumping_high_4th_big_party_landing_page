import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <span className={styles.copyRight}>
          JUMPINGHIGH © 2014. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
