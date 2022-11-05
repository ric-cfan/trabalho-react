import { useState, useEffect, state } from "react";
import { Button, Container, Row, Col, Form, Stack, Spinner } from 'react-bootstrap';
import api from '../../services/api'
import "./styles.css";
import Nav from "react-bootstrap/Nav";
import axios from 'axios';

function MainInserir() {
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [qtdEstoque, setQtdEstoque] = useState("")
  const [valorUnitario, setValorUnitario] = useState("")
  const [categoria, setCategoria] = useState("")
  const [categoriaJson, setCategoriaJson] = useState("")
  const [file, setFile] = useState({state})
  const [categorias, setCategorias] = useState([])
  
  useEffect(() => {
    const getApi = async () => {
      const {data} = await api.get("/api/categoria")
      setCategorias(data)
    }
    getApi()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      categoriaId()
    }, 100);
  });

  const changeHandler = (event) => {
		setFile(event.target.files[0]);
	};

  const categoriaId = () => {
    categorias.map( item => {
      if(item.nome == categoria) {
        setCategoriaJson(item.id)
      }
  })}

  const post = async () => {
    if(nome == "" || descricao == "" || qtdEstoque == "" || valorUnitario == "" || categoria == "" || categoria == "Escolha a categoria") {
      alert("Preencha todos os campos")
      return
    }

    
    const novoProduto = {
      nome: nome,
      descricao: descricao,
      qtdEstoque: parseInt(qtdEstoque),
      valorUnitario: parseFloat(valorUnitario),
      idCategoria: categoriaJson
      
    }

    const json = JSON.stringify(novoProduto)
    const blob = new Blob([json], {type: 'application/json'})

    const formData = new FormData();
    formData.append("file", file);
    formData.append("produto", blob);
    
    categoriaId()
    console.log(blob)
    console.log(file)
    const { data } = await api.post("/api/produto", formData, {headers: {"Accept": "application/json", "Content-Type": "multipart/form-data"}})
    console.log(data)
  }

  return (
    <div className='main-inserir'>
    <Container className="bg-secondary">
      <h1 className='text-center'>Inserir novo produto</h1>

      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" placeholder="Insira o nome do produto" onChange={ e => setNome(e.target.value)} value={nome} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control as="textarea" rows={3} onChange={ e => setDescricao(e.target.value)} value={descricao} />
        </Form.Group> 

        <Form.Group className="mb-3" >
          <Form.Label>Estoque:</Form.Label>
          <Form.Control type="number" placeholder="Insira a quantidade de estoque do produto" onChange={ e => setQtdEstoque(e.target.value)} value={qtdEstoque} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Valor unitário:</Form.Label>
          <Form.Control type="number" placeholder="Insira o valor unitário do produto" onChange={ e => setValorUnitario(e.target.value)} value={valorUnitario} />
        </Form.Group>

        <input type="file" onChange={changeHandler} />

        <Form.Label>Categoria:</Form.Label>
        <Form.Select aria-label="Default select example" onChange={ e => setCategoria(e.target.value)} value={categoria}>
          <option>Escolha a categoria</option>
          {categorias.length > 0 ? (categorias.map( item => {
            return <option>{item.nome}</option>
          })) : null}

        </Form.Select>
        
        <Stack className="mb-3">
          <Button className="" onClick={post}>Cadastrar Novo Produto</Button>
        </Stack>
      </Form>

    </Container>
    </div>
  );
}

export default MainInserir;
