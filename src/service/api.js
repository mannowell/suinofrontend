import axios from "axios";

const api = axios.create({
  baseURL: "https://SEU_PROJETO.railway.app/api", // Troque pela URL real da sua API
});

export default api;
