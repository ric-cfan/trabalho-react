import { useState } from "react";
import "./styles.css";
import Logo from "../Imagens/box.png";

function MainLogin() {
  return (
    <div id="card_container">
      <div id="card">
        <img id="image" src={Logo} alt="" />

        <div id="content">
          <label id="Titulo">SerraTreco</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu nome de usuário"
          />
          <input type="password" id="password" placeholder="Digite sua senha" />
        </div>

        <button id="submit">ENTRAR</button>
      </div>
    </div>
  );
}

export default MainLogin;
