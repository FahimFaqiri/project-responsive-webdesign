import React from "react";
import styled from "styled-components";
// import styled from "styled-components";
import styles from "./Center.module.css";

function Center() {
  return (
    <div className={styles["section-centered"]}>
      <div className={styles["text-block"]}>
        Same Zoom links, same people, same meetings - but so much
      </div>
    </div>
  );
}

export default Center;
