import axios from "axios";

const api = axios.create({
  baseURL: "https://elas-api.mocklab.io/",
});

export default api;
