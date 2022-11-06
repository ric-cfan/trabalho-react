import { useState, useEffect, state } from "react";
import { Button, Container, Row, Col, Form, Stack, Spinner } from 'react-bootstrap';
import api from '../../services/api'
import "./styles.css";
import Nav from "react-bootstrap/Nav";
import axios from 'axios';
import {useParams, useLocation} from 'react-router-dom'

function MainAtualizar({produto}) {
  produto = produto || JSON.parse(localStorage.getItem("@app/product"))
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [qtdEstoque, setQtdEstoque] = useState("")
  const [valorUnitario, setValorUnitario] = useState("")
  const [categoria, setCategoria] = useState("")
  const [categoriaJson, setCategoriaJson] = useState("")
  const [file, setFile] = useState({state})
  const [categorias, setCategorias] = useState([])

  const [product, setProduct] = useState(produto)

  const handleFormChange = (value, name) => {
    const values = {...product, [name]: value}
    setProduct(values)
  }

  useEffect(() => {
    const getApi = async () => {
      const {data} = await api.get("/api/categoria")
      setCategorias(data)
    }
    getApi()
  }, [])



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
    // TODO: Add protection
    // if(nome == "" || descricao == "" || qtdEstoque == "" || valorUnitario == "" || categoria == "" || categoria == "Escolha a categoria") {
    //   alert("Preencha todos os campos")
    //   return
    // }

    const novoProduto = {
      ...product,
      qtdEstoque: parseInt(product.qtdEstoque),
      valorUnitario: parseFloat(product.valorUnitario),
      
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
          <Form.Control type="text" placeholder="Insira o nome do produto" onChange={ e => handleFormChange(e.target.value, "nome")} value={product.nome} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control as="textarea" rows={3} onChange={ e => handleFormChange(e.target.value, "descricao")} value={product.descricao} />
        </Form.Group> 

        <Form.Group className="mb-3" >
          <Form.Label>Estoque:</Form.Label>
          <Form.Control type="number" placeholder="Insira a quantidade de estoque do produto" onChange={ e => handleFormChange(e.target.value, "qtdEstoque")} value={product.qtdEstoque} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Valor unitário:</Form.Label>
          <Form.Control type="number" placeholder="Insira o valor unitário do produto" onChange={ e => handleFormChange(e.target.value, "valor")} value={product.valorUnitario} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Categoria:</Form.Label>
          <Form.Select aria-label="Default select example" onChange={ e => handleFormChange(e.target.value, "categoria")} value={product.categoria.nome}>
            <option>Escolha a categoria</option>
            {categorias.length > 0 ? (categorias.map( item => {
              return <option>{item.nome}</option>
            })) : null}

          </Form.Select>
        </Form.Group>

         <input type="file" onChange={changeHandler} />
        
        <Stack className="mb-3">
          <Button className="" onClick={post}>Cadastrar Novo Produto</Button>
        </Stack>
      </Form>

    </Container>
    </div>
  );
}

export default MainAtualizar;
