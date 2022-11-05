import { useState } from "react";
import "./styles.css";
import CardItem from "../CardItem";

function MainPainel() {
  return (
    <div className="main-home">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
}

export default MainPainel;
