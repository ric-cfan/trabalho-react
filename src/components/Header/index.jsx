import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import "./styles.css";
import { LinkContainer } from "react-router-bootstrap";
import CastleColor from "../Imagens/castleC.png";
import Lego from "../Imagens/legoPieces.png";
import { AuthContext } from "../../components/Contexts/auth";

function Header() {

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <header>
      <div className="imagem">
        <img src={CastleColor} height="80%"/>
      </div>

      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <LinkContainer to="/painel">
            <Nav.Link eventKey="link-1">Painel</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/inserir">
            <Nav.Link eventKey="link-2">Inserir</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/" onClick={handleLogout}>
            <Nav.Link eventKey="link-3">Deslogar</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>

      <div className="imagem">
        <img src={Lego} height="80%"/>
      </div>
    </header>
  );
}

export default Header;
