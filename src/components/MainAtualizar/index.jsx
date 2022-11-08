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

  const token = localStorage.getItem("token")

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

    const { data } = await api.put(`/api/produto/${produto.idProduto}`, formData, {headers: {"Authorization": `${token}`, "Accept": "application/json", "Content-Type": "multipart/form-data"}})

    navigate('/painel')

  }

  return (
    <div className='main-atualizar'>
    <Container className="container">
      <h1 className='text-center'>Atualizar dados do produto</h1>

      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Nome:</Form.Label>
          <Form.Control required="required" type="text" placeholder="Insira o nome do produto" onChange={ e => handleFormChange(e.target.value, "nome")} value={product.nome} style={{backgroundColor:'#171518', border: '1px solid gold', color: 'white'}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control as="textarea" placeholder="Insira a descricao" rows={3} onChange={ e => handleFormChange(e.target.value, "descricao")} value={product.descricao} style={{textAlign:"left", backgroundColor:'#171518', border: '1px solid gold', color: 'white'}}/>
        </Form.Group> 

        <Form.Group className="mb-3" >
          <Form.Label>Estoque:</Form.Label>
          <Form.Control type="number" placeholder="Insira a quantidade de estoque do produto" onChange={ e => handleFormChange(e.target.value, "qtdEstoque")} value={product.qtdEstoque} style={{backgroundColor:'#171518', border: '1px solid gold', color: 'white'}}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Valor unitário:</Form.Label>
          <Form.Control type="number" placeholder="Insira o valor unitário do produto" onChange={ e => handleFormChange(e.target.value, "valorUnitario")} value={product.valorUnitario} style={{backgroundColor:'#171518', border: '1px solid gold', color: 'white'}} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Categoria:</Form.Label>
          <Form.Select aria-label="Default select example" onChange={ e => handleFormChange(e.target.value, "categoria")} value={product.categoria.nome} style={{backgroundColor:'#171518', border: '1px solid gold', color: 'white'}}>
            <option></option>
            {categorias.length > 0 ? (categorias.map( item => {
              return <option style={{color:'white'}} key={item.nome}> {item.nome} </option>
            })) : null}

          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Imagem: </Form.Label><br></br>
          <input type="file" onChange={changeHandler} />
        </Form.Group>

        <Stack className="mb-3">
          <Button className="botao" style={{marginTop:'0.8rem', border: 'none', outline: 'none', backgroundColor: 'rgb(187, 158, 97)', color: '#171518', fontWeight: 'bold', boxShadow: '5px 5px 4px rgb(0, 0, 0, 0.5)'}} onClick={put}>Atualizar Produto</Button>
        </Stack>

      </Form>

    </Container>
    </div>
  );
}

export default MainAtualizar;
