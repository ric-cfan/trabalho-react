import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import "./styles.css";
import CardItem from "../CardItem";
import api from "../../services/api"


function MainPainel() {
  const [produtos, setProdutos] = useState([])
  const [produtosGet, setProdutosGet] = useState([])

  const getApi = async () => {
    const { data } = await api.get("/api/produto")
    setProdutos(data)
  }

  useEffect(() => {
    getApi()
  }, [])


  return (
    <div className="main-home">
      {produtos?.map((item, index) =>
        <CardItem key={index} produto={item} />
      )}
    </div>
  );
}

export default MainPainel;
