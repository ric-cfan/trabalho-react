import { Button, Card } from "react-bootstrap";
import Caixa from "../Imagens/box.png"
import api from '../../services/api'
import { LinkContainer } from "react-router-bootstrap";
import React from 'react';

function CardItem({ produto }) {

  const onDelete = (id) => {
    window.location.reload(false);
    const { data } = api.delete("/api/produto/" + id)
  }

  const setCurrentProduct = (product) => {
    localStorage.setItem("@app/product", JSON.stringify(product))
  }

  return (

    <Card className="card" bg={"white"} style={{ width: "20rem", height: "38rem", color: "black" }}>
      <Card.Title>{produto.nome}</Card.Title>
      <Card.Img variant="top" src={produto.urlImagem} style={{ width: "90%", height: '40%' }} />
      <Card.Body>

        <Card.Text> Id: {produto.idProduto} </Card.Text>
        <Card.Text> Descrição: {produto.descricao} </Card.Text>
        <Card.Text> Estoque: {produto.qtdEstoque} unidades </Card.Text>
        <Card.Text> Data de cadastro: {produto.dataCadastro} </Card.Text>
        <Card.Text> Valor unitário: R${produto.valorUnitario} </Card.Text>
        <Card.Text> Categoria: {produto.categoria.nome} </Card.Text>

        <div className="d-grid gap-2">
          <LinkContainer to={`/atualizar/${produto.idProduto}`}>
            <Button onClick={() => setCurrentProduct(produto)} variant="primary" >Atualizar</Button>
          </LinkContainer>
          <Button variant="danger" onClick={() => onDelete(produto.idProduto)}>Excluir</Button>{" "}
        </div>

      </Card.Body>
    </Card>
  );
}

export default CardItem;

// import { useState } from 'react'
// import './styles.css'
// import Logo from '../Imagens/box.png'

// function CardItem() {

//   return (
//     <div className="card-item">
//       <div id='produto'>
//         <img src={Logo} />
//         <div id='dados'>
//           <p>sss</p>
//           <p>sss</p>
//           <p>sss</p>
//         </div>
//       </div>

//       <div id='botoes'>
//         <button></button>
//         <button></button>
//       </div>
//     </div>
//   )
// }

// export default CardItem
