import React from "react";
import styles from "./Video.module.css";
import { circle } from "../../images";
import cx from "classnames";

function Video() {
  return (
    <div className={cx(styles.video, styles.section)}>
      <div className={styles["video-block-1"]}>
        <img src={circle}></img>
        <h2 className={styles["video-text"]}>
          Create a level playing field, for everyone
        </h2>
        <h3 className={styles["video-subtext"]}>
          visualized in real-time, so no one gets left out.
        </h3>
        <a className={styles["continue"]} href="#">
          <div className={styles["learn-more-text"]}>Learn More</div>
        </a>
      </div>
      <div className={styles["video-block-2"]}>
        <video playsInline autoPlay muted loop width="100%">
          <source
            src="https://assets.website-files.com/5ec63971d0d5ff28ed3e8fa0/5f0c4a44cd92d9189118f74a_animation_02_01.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Video;
