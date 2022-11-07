import { useState, useEffect, state } from "react";
import { Button, Container, Row, Col, Form, Stack, Spinner } from 'react-bootstrap';
import api from '../../services/api'
import "./styles.css";
import {useNavigate} from 'react-router-dom';

function MainAtualizar({produto}) {
  produto = produto || JSON.parse(localStorage.getItem("@app/product"))
  const [categoria, setCategoria] = useState("")
  const [categoriaJson, setCategoriaJson] = useState("")
  const [file, setFile] = useState({state})
  const [categorias, setCategorias] = useState([])

  const navigate = useNavigate();

  const id = produto.categoria.id

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

  const put = async () => {
    // TODO: Add protection
    // if(nome == "" || descricao == "" || qtdEstoque == "" || valorUnitario == "" || categoria == "" || categoria == "Escolha a categoria") {
    //   alert("Preencha todos os campos")
    //   return
    // }

    const novoProduto = {
      ...product,
      qtdEstoque: parseInt(product.qtdEstoque),
      valorUnitario: parseFloat(product.valorUnitario),
      idCategoria: parseInt(id)  
    }

    const json = JSON.stringify(novoProduto)
    const blob = new Blob([json], {type: 'application/json'})

    const formData = new FormData();
    formData.append("file", file);
    formData.append("produto", blob);
    
    categoriaId()
    console.log("id" + id)
    console.log("json" + json)
    const { data } = await api.put(`/api/produto/${produto.idProduto}`, formData, {headers: {"Accept": "application/json", "Content-Type": "multipart/form-data"}})
    console.log(data)
    navigate('/painel')

  }

  return (
    <div className='main-inserir'>
    <Container className="bg-secondary">
      <h1 className='text-center'>Atualizar dados do produto</h1>

      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" placeholder="Insira o nome do produto" onChange={ e => handleFormChange(e.target.value, "nome")} value={product.nome} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control as="textarea" placeholder="Insira a descricao" rows={3} onChange={ e => handleFormChange(e.target.value, "descricao")} value={product.descricao} style={{textAlign:"left"}}/>
        </Form.Group> 

        <Form.Group className="mb-3" >
          <Form.Label>Estoque:</Form.Label>
          <Form.Control type="number" placeholder="Insira a quantidade de estoque do produto" onChange={ e => handleFormChange(e.target.value, "qtdEstoque")} value={product.qtdEstoque} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Valor unitário:</Form.Label>
          <Form.Control type="number" placeholder="Insira o valor unitário do produto" onChange={ e => handleFormChange(e.target.value, "valorUnitario")} value={product.valorUnitario} />
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
          <Button className="" onClick={put}>Atualizar Produto</Button>
        </Stack>

      </Form>

    </Container>
    </div>
  );
}

export default MainAtualizar;
