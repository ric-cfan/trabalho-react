import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import "./styles.css";
import CardItem from "../CardItem";
import api from "../../services/api"
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function MainPainel() {
  const [produtos, setProdutos] = useState([])
  const [produtosGet, setProdutosGet] = useState([])
  const[filtro, setFiltro] = useState(0)

  const getApi = async () => {
    const { data } = await api.get("/api/produto")
    setProdutos(data)
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className="main-home">

    <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={null}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Todos
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Em estoque        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} variant='danger'>
          Fora de estoque        </ToggleButton>
    </ToggleButtonGroup>

      {produtos?.map((item, index) =>
        <CardItem key={index} produto={item} />
      )}
    </div>
  );
}

export default MainPainel;
