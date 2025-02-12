import axios from "axios";

const api = axios.create({
  baseURL: "https://suinobackend.onrender.com", // Troque pela URL real da sua API
});

export default api;
