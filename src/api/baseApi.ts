import axios from "axios";

const API_PORT = "3002";
const API_ENDPOINT = `http://localhost:${API_PORT}`;
 
const baseApi = axios.create({
  baseURL: API_ENDPOINT,
});

export default baseApi;