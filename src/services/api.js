import axios from "axios";

const api = axios.create({
    baseURL: "https://suinobackend.onrender.com"
});

export default api;
