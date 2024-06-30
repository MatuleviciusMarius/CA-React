import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_ENDPOINT,
})