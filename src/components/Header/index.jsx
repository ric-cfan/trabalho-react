import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link eventKey="link-1">Deslogar</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/painel">
            <Nav.Link eventKey="link-2">Painel</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/inserir">
            <Nav.Link eventKey="link-3">Inserir</Nav.Link>
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
