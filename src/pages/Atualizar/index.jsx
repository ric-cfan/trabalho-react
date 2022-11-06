import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainAtualizar from "../../components/MainAtualizar";
import "./styles.css";
import Nav from "react-bootstrap/Nav";

function Atualizar() {
  return (
    <div className="atualizar">
      <Header />

      <MainAtualizar />

      <Footer />
    </div>
  );
}

export default Atualizar;
