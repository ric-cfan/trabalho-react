import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import "./styles.css";
import CardItem from "../CardItem";
import api from "../../services/api"

function MainPainel() {
  const [produtos, setProdutos] = useState([])
  
  useEffect(() => {
    const getApi = async () => {
      const {data} = await api.get("/api/produto")
      setProdutos(data)
    }
    getApi()
  }, [])

  

  return (
    <div className="main-home">
 
        {produtos.length > 0 ? (produtos.map( item => {
          return <CardItem key={item.idProduto} produto={item} />
        })) : null}


      {/* <CardItem />
      <CardItem />
      <CardItem />
      <CardItem /> */}
    </div>
  );
}

export default MainPainel;
