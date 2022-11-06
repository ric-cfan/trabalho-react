import { Route, Routes } from "react-router-dom";
import "./App.css";
import Painel from "./pages/Painel";
import Login from "./pages/Login";
import Atualizar from "./pages/Atualizar";
import Inserir from "./pages/Inserir";

function App() {

  return (
    <Routes> 
      <Route path="/" element={<Login />} />
      <Route path="/painel" element={<Painel />} />
      <Route path="/atualizar/:id" element={<Atualizar />} />
      <Route path="/inserir" element={<Inserir />} />
      <Route path="*" element={<h1>Erro 404: Página não encontrada</h1>} />
    </Routes>
  )
}

export default App
