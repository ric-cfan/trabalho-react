import { Button, Card } from "react-bootstrap";
import Caixa from "../Imagens/box.png"

function CardItem({produto}) {

  return (

    <Card className="card" bg={"white"} style={{ width: "18rem", color: "black" }}>
        <Card.Title>{produto.nome}</Card.Title>
      <Card.Img variant="top" src={produto.urlImagem === null ? Caixa : produto.urlImagem} />
      <Card.Body>

        <Card.Text> Id: {produto.idProduto} </Card.Text>
        <Card.Text> Descrição: {produto.descricao} </Card.Text>
        <Card.Text> Estoque: {produto.qtdEstoque} unidades </Card.Text>
        <Card.Text> Data de cadastro: {produto.dataCadastro} </Card.Text>
        <Card.Text> Valor unitário: R${produto.valorUnitario} </Card.Text>
        <Card.Text> Categoria: {produto.categoria.nome} </Card.Text>
      
        <div className="d-grid gap-2">
          <Button variant="primary">
            Editar
          </Button>{" "}
          <Button variant="danger">Excluir</Button>{" "}
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
