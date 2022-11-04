import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Editar from "./pages/Editar";

function App() {

  return (
    <Routes> 
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/editar" element={<Editar />} />
      <Route path="*" element={<h1>Erro 404: Página não encontrada</h1>} />
    </Routes>
  )
}

export default App
