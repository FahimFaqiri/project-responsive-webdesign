import React from "react";
import styles from "./Teams.module.css";
// import { githubLogo } from "../../images";
import { github, academy, drift, fast, uber, vm_ware } from "../../images";
function Teams() {
  return (
    <>
      <div className={styles["section-teams"]}>
        <h3>Hyper-productive teams run on pages</h3>
        <div className={styles["grid-container"]}>
          <div className={styles["grid-item"]}>
            <img src={github}></img>
          </div>
          <div className={styles["grid-item"]}>
            <img src={academy}></img>
          </div>
          <div className={styles["grid-item"]}>
            <img src={drift}></img>
          </div>
          <div className={styles["grid-item"]}>
            <img src={fast}></img>
          </div>
          <div className={styles["grid-item"]}>
            <img src={uber}></img>
          </div>
          <div className={styles["grid-item"]}>
            <img src={vm_ware}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
