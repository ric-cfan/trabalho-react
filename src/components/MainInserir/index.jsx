import { useState, useEffect, state } from "react";
import { Button, Container, Form, Stack } from 'react-bootstrap';
import api from '../../services/api'
import "./styles.css";
import { useNavigate } from 'react-router-dom';

function MainInserir() {
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [qtdEstoque, setQtdEstoque] = useState("")
  const [valorUnitario, setValorUnitario] = useState("")
  const [categoria, setCategoria] = useState("")
  const [categoriaJson, setCategoriaJson] = useState("")
  const [file, setFile] = useState({ state })
  const [categorias, setCategorias] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    const getApi = async () => {
      const { data } = await api.get("/api/categoria")
      setCategorias(data)
    }
    getApi()
  }, [])

  useEffect(() => {
    categoriaId()
  }, [categoria])

  const changeHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const categoriaId = () => {
    categorias.map(item => {
      if (item.nome == categoria) {
        setCategoriaJson(item.id)
      }
    })
  }

  const post = async () => {
    if (nome == "" || descricao == "" || qtdEstoque == "" || valorUnitario == "" || categoria == "" || categoria == "Escolha a categoria") {
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
    const blob = new Blob([json], { type: 'application/json' })

    const formData = new FormData();
    formData.append("file", file);
    formData.append("produto", blob);

    const token = localStorage.getItem("token")

    categoriaId()
    console.log(blob)
    console.log(file)
    console.log(token)
    const { data } = await api.post("/api/produto", formData, { headers: {"Authorization": `${token}`,  "Accept": "application/json", "Content-Type": "multipart/form-data" } })
    console.log(data)
    navigate('/painel')
  }

  return (
    <div className='main-inserir'>
      <Container className="container" >
        <h1 className='text-center'>Inserir novo produto</h1>

        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" placeholder="Insira o nome do produto" onChange={e => setNome(e.target.value)} value={nome} style={{ backgroundColor: '#171518', border: '1px solid gold', color: 'white' }} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descrição: </Form.Label>
            <Form.Control as="textarea" placeholder="Insira a descricao" rows={3} onChange={e => setDescricao(e.target.value)} value={descricao} style={{ textAlign: "left", backgroundColor: '#171518', border: '1px solid gold', color: 'white' }} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Estoque:</Form.Label>
            <Form.Control type="number" placeholder="Insira a quantidade de estoque do produto" onChange={e => setQtdEstoque(e.target.value)} value={qtdEstoque} style={{ backgroundColor: '#171518', border: '1px solid gold', color: 'white' }} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Valor unitário:</Form.Label>
            <Form.Control type="number" placeholder="Insira o valor unitário do produto" onChange={e => setValorUnitario(e.target.value)} value={valorUnitario} style={{ backgroundColor: '#171518', border: '1px solid gold', color: 'white' }} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Categoria:</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e => setCategoria(e.target.value)} value={categoria} style={{ backgroundColor: '#171518', border: '1px solid gold', color: 'white' }}>
              <option></option>
              {categorias.length > 0 ? (categorias.map(item => {
                return <option style={{ color: 'white' }} key={item.nome}>{item.nome}</option>
              })) : null}

            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Imagem: </Form.Label><br></br>

            <input type="file" onChange={changeHandler} className="inputFile" />

          </Form.Group>

          <Stack className="mb-3">
            <Button className="botao" onClick={post} style={{ marginTop: '0.8rem', border: 'none', outline: 'none', backgroundColor: 'rgb(187, 158, 97)', color: '#171518', fontWeight: 'bold', boxShadow: '5px 5px 4px rgb(0, 0, 0, 0.5)' }} >Cadastrar Novo Produto</Button>
          </Stack>
        </Form>

      </Container>
    </div>
  );
}

export default MainInserir;
