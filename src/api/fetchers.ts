import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export const getCourses = async () => {
  const response = await api.get("/courses");
  return response.data;
};
