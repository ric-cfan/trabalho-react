import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Painel from "./pages/Painel";
import Login from "./pages/Login";
import Atualizar from "./pages/Atualizar";
import Inserir from "./pages/Inserir";
import { AuthContext, AuthProvicer } from "./components/Contexts/auth"
import { useContext } from "react";

function App() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    
    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/" />
    }

    return children;
  
  }

  return (
    <AuthProvicer>
      <Routes>
        <Route exact path="/" element={ <Login />} />
        <Route path="/painel" element={<Private><Painel /></Private> } />
        <Route path="/atualizar/:id" element={<Private><Atualizar /></Private>} />
        <Route path="/inserir" element={<Private><Inserir /></Private>} />
        <Route path="*" element={<h1>Erro 404: Página não encontrada</h1>} />
      </Routes>
    </AuthProvicer>
  )
}

export default App
