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
  const [produtosFiltrados, setProdutosFiltrados] = useState()
  // const [retorno, setRetorno] = useState(
  //   <>{produtos?.map((item, index) =>
  //     <CardItem key={index} produto={item} />)} 
  //   </>
  // )

  const getApi = async () => {
    const { data } = await api.get("/api/produto")
    setProdutos(data)
    setProdutosFiltrados(data)
  }

  useEffect(() => {
    getApi()
  }, [])

  // useEffect(() => {
  //   if(escolha == 2) {
  //     setRetorno(<>{produtos?.filter(item => item.qtdEstoque > 0).map( (itemFiltrado, index) => (
  //       <CardItem key={index} produto={itemFiltrado} />))}
  //     </>)
  //   }
  //   else if(escolha == 3) {
  //     setRetorno(<>{produtos?.filter(item => item.qtdEstoque < 1).map( (itemFiltrado, index) => (
  //       <CardItem key={index} produto={itemFiltrado} />))} 
  //     </>)
  //   }
  //   else {
  //     setRetorno(<>{produtos?.map((item, index) =>
  //       <CardItem key={index} produto={item} />)} 
  //     </>)
  //   }
  // }, [retorno, escolha])

  const mostrarCards = (e) => {
    console.log(e)
    // setEscolha(e.target.value)
    if(e == 1) {
      setProdutosFiltrados(produtos)
    }

    if(e == 2) {
      const filtro = produtos.filter(item => item.qtdEstoque > 0)
      setProdutosFiltrados(filtro)
    }

    if(e == 3) {
      const filtro = produtos.filter(item => item.qtdEstoque <= 0)
      setProdutosFiltrados(filtro)
    }

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

  const onDelete = async (id) => {
    const { data } = await api.delete("/api/produto/" + id)
    const novoArray = produtosFiltrados.filter(item => item.idProduto != id)
    setProdutosFiltrados(novoArray)
  }

  return (
    <div className="main-home">

    <ToggleButtonGroup className="containerBotoes" type="radio" name="options" defaultValue={1} onChange={e => mostrarCards(e)} style={{marginBottom: '1.4rem'}}>
        <ToggleButton className="botoes" id="tbg-radio-1" value={1}>
          Todos
        </ToggleButton>
        <ToggleButton className="botoes" id="tbg-radio-2" value={2}>
          Em estoque        </ToggleButton>
        <ToggleButton className="botoes" id="tbg-radio-3" value={3} variant='danger'>
          Fora de estoque        </ToggleButton>
    </ToggleButtonGroup>

    {/* <div className="lista-cards">{retorno}</div> */}

    <div className="lista-cards">
      {produtosFiltrados?.map((item, index) =>
      <CardItem key={index} produto={item} onDelete={onDelete}/>
    )};
    </div>

    </div>
  );
}

export default MainPainel;
