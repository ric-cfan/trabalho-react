import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import { createUsuario } from "../../services/api";

export const AuthContext = createContext();


export const AuthProvicer = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const token = localStorage.getItem("token")

        if (recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false)
    }, []);

    const login = async (username, password) => {
        const response = await createUsuario(username, password);

        console.log("login", response);

        const loggedUser = response.config.data;
        const token = response.headers.authorization;
        console.log(loggedUser)
        console.log(token)

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
        
        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        navigate("/painel");
        
    };
        
    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/");
    };

    
//   const { logout } = useContext(AuthContext);

//   const handleLogout = () => {
//     logout();
//   }

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}