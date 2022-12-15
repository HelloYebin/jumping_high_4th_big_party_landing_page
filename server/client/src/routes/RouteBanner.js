import styles from "../styles/routeBanner.module.css";
import banner from "../image/notice.png";

export default function RouteBanner() {
  return (
    <>
      <img src={banner} className={styles.banner} alt="banner" />
    </>
  );
}
