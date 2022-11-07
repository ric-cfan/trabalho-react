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
  const [escolha, setEscolha] = useState()
  const [retorno, setRetorno] = useState(
    <>{produtos?.map((item, index) =>
      <CardItem key={index} produto={item} />)} 
    </>
  )
  const [anterior, setAnterior] = useState()

  const getApi = async () => {
    const { data } = await api.get("/api/produto")
    setProdutos(data)
  }

  useEffect(() => {
    getApi()
  }, [])

  useEffect(() => {
    if(escolha == 2) {
      setRetorno(<>{produtos?.filter(item => item.qtdEstoque > 0).map( (itemFiltrado, index) => (
        <CardItem key={index} produto={itemFiltrado} />))}
      </>)
    }
    else if(escolha == 3) {
      setRetorno(<>{produtos?.filter(item => item.qtdEstoque < 1).map( (itemFiltrado, index) => (
        <CardItem key={index} produto={itemFiltrado} />))} 
      </>)
    }
    else {
      setRetorno(<>{produtos?.map((item, index) =>
        <CardItem key={index} produto={item} />)} 
      </>)
    }
  }, [retorno, escolha])

  function refreshPage() {
    window.location.reload(false);
  }

  const mostrarCards = () => {
    console.log(event.target.value)
    setEscolha(event.target.value)

    // if(event.target.value == 2) {
    //   return (<>{produtos?.filter(item => item.qtdEstoque > 0).map( (itemFiltrado, index) => (
    //     <CardItem key={index} produto={itemFiltrado} />))}
    //   </>)
    // }
    // else if(event.target.value == 3) {
    //   return (<>{produtos?.filter(item => item.qtdEstoque < 1).map( (itemFiltrado, index) => (
    //     <CardItem key={index} produto={itemFiltrado} />))} 
    //   </>)
    // }
    // else {
    //   return (<>{produtos?.map((item, index) =>
    //     <CardItem key={index} produto={item} />)} 
    //   </>)
    // }
  }

  return (
    <div className="main-home">

    <ToggleButtonGroup className="containerBotoes" type="radio" name="options" defaultValue={1} onChange={mostrarCards}>
        <ToggleButton className="botoes" id="tbg-radio-1" value={1}>
          Todos
        </ToggleButton>
        <ToggleButton className="botoes" id="tbg-radio-2" value={2}>
          Em estoque        </ToggleButton>
        <ToggleButton className="botoes" id="tbg-radio-3" value={3} variant='danger'>
          Fora de estoque        </ToggleButton>
    </ToggleButtonGroup>

    <div className="lista-cards">{retorno}</div>

    {/* {produtos?.map((item, index) =>
      <CardItem key={index} produto={item} />
    )} */}

    </div>
  );
}

export default MainPainel;
