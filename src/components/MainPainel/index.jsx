import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import "./styles.css";
import CardItem from "../CardItem";
import api from "../../services/api"


function MainPainel() {
  const [produtos, setProdutos] = useState([])
  const [produtosGet, setProdutosGet] = useState([])
  
  const getApi = async () => {
    const {data} = await api.get("/api/produto")
    setProdutos(data)
  }
  
  useEffect(() => {
    getApi()
  }, [])

  useEffect(() => {
    setTimeout(() => {
       getApi()
     }, 100);
   }); 

  return (
    <div className="main-home">
 
        {produtos.length > 0 ? (produtos.map( (item, index) => {
          return <CardItem key={index} produto={item} />
        })) : null}

    </div>
  );
}

export default MainPainel;
