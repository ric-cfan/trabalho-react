import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className="header">
      <h1>Header</h1>
      <Link to="/">
        <button>Deslogar</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/editar">
        <button>Editar</button>
      </Link>
    </div>
  )
}

export default Header