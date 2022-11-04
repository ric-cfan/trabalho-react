import { useState } from 'react'
import './styles.css'
import Logo from '../Imagens/box.png'

function CardItem() {

  return (
    <div className="card-item">
      <div id='produto'>
        <img src={Logo} />
        <div id='dados'>
          <p>sss</p>
          <p>sss</p>
          <p>sss</p>
        </div>
      </div>

      <div id='botoes'>
        <button></button>
        <button></button>
      </div>
    </div>
  )
}

export default CardItem