import { useState, useContext } from "react";
import "./styles.css";
import Logo from "../Imagens/box.png";
import { AuthContext } from "../Contexts/auth"
import api from "../../services/api";

function MainLogin() {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
    const handleSubmit = (e) => {
      e.preventDefault();
      login(username, password);

    }

  return (
    <form id="card_container" onSubmit={handleSubmit}>
      <div id="card">
        <img id="image" src={Logo} alt="" />

        <div id="content">
          <label id="Titulo">Serra<span>Treco</span></label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
          type="password" 
          id="password" 
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           />
        </div>
        <button id="submit" >ENTRAR</button>
      </div>
    </form>
  );
}

export default MainLogin;
