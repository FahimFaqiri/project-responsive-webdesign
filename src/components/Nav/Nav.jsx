import React, { Component } from "react";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["nav-block"]}>
        <div className={styles["logo"]}></div>
      </div>
    </div>
  );
}

export default Nav;
