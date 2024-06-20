import React from "react";
import { render } from "react-dom";
import Checkout from "./components/Checkout";
import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  margin: 0
};

const App = () => (
  <div style={styles}>
    <nav>
      <h1>Airlent Shop</h1>
    </nav>
    <Checkout />
  </div>
);

export default App;
