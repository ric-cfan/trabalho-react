import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainInserir from "../../components/MainInserir";
import "./styles.css";
import Nav from "react-bootstrap/Nav";

function Inserir() {

  return (
    <div className="inserir">
      <Header />

      <MainInserir />

      <Footer />
    </div>
  );
}

export default Inserir;
