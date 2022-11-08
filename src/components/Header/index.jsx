import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import { LinkContainer } from "react-router-bootstrap";
import BlackBox from "../Imagens/boxB.png"

function Header() {
  return (
    <header>
      <div className="imagem">
        <img src={BlackBox} height="80%"/>
      </div>

      <Nav justify variant="tabs" defaultActiveKey="/" >
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
          <LinkContainer to="/">
            <Nav.Link eventKey="link-3">Deslogar</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>

    </header>
  );
}

export default Header;

// import { useState } from 'react'
// import './styles.css'
// import { Link } from 'react-router-dom'

// function Header() {

//   return (
//     <div className="header">

//       <h1>Header</h1>

//       <Link to="/">
//         <button>Deslogar</button>
//       </Link>

//       <Link to="/home">
//         <button>Home</button>
//       </Link>

//       <Link to="/editar">
//         <button>Editar</button>
//       </Link>

//     </div>
//   )
// }

// export default Header
