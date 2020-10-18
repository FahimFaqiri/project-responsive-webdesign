import React, { Component } from "react";
import { Header, Nav } from "./components";
import styles from "./App.module.css";

export class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
