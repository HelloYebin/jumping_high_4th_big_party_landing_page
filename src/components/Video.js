import styles from "../styles/video.module.css";

function Video() {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.vidCrop}>
        <video
          className={styles.vid}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source
            src="https://www.qatar2022.qa/sites/default/files/2022-09/buy-your-tickets-last-minute.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
}
export default Video;
