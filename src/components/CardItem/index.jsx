import { Button, Card } from "react-bootstrap";

function CardItem() {
  return (
    <Card bg={"white"} style={{ width: "18rem", color: "black" }}>
      <Card.Img variant="top" src="/src/components/Imagens/paisagem.jpg" />
      <Card.Body>
        <Card.Title>Paisagem</Card.Title>
        <Card.Text>
          Uma belissima paisagem mostrando montanhas ao nascer do
          solsadlkfjadslkf jlçasdkf jçasdlkf jadsçfaç lskdfjçald skjfç
        </Card.Text>
        <div class="d-grid gap-2">
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
