import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainHome from "../../components/MainPainel";
import "./styles.css";

function Painel() {
  return (
    <div className="home">
      <Header />

      <MainHome />

      <Footer />
    </div>
  );
}

export default Painel;
