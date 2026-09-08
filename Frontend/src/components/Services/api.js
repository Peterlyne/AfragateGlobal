import axios from "axios";

const api = axios.create({
  baseURL: "https://afragateglobal.onrender.com/api",
});

export default api;