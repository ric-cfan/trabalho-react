import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export const createUsuario = async (username, password) => {
    return api.post("/login", {username, password});
}

export default api;