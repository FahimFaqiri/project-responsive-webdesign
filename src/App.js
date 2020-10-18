import React, { useState, useRef } from "react";
import { Header, Nav, Burger, Menu, Teams } from "./components";
import styles from "./App.module.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { useOnClickOutside } from "./hooks";

// export class App extends Component {
function App() {
  // render() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className={styles.App}>
          <Nav />
          <Header />
          <Teams />
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}
// }

export default App;
