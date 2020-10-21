import React from "react";
import styles from "./Header.module.css";
import cx from "classnames";

function Header() {
  return (
    <div className={styles["top-section"]}>
      <h1 className={styles["heroText"]}>Give your meetings</h1>
      <h1 className={`${styles.heroText} ${styles["text-gradient"]}`}>
        superpowers
      </h1>
      <h4 className={styles["hero-subtitle"]}>
        Macro is a customizable meeting interface built on top of Zoom,
        reimagined for collaboration and inclusive conversations
      </h4>
      <form action="">
        <input
          type="email"
          className={cx(styles["input"], styles["col-t-9"])}
          name="mail"
          id="mail"
          placeholder="Enter your work email >"
        />
        <div
          className={cx(styles["btn"], styles["startBtn"], styles["col-t-9"])}
        >
          <span>Get Started</span>
        </div>
      </form>
      <p className={styles["btn-subtitle"]}>
        No waitlist - available for download now.
      </p>
    </div>
  );
}

export default Header;
