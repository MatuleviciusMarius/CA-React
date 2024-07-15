import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export type CourseType = {
  id: string;
  title: string;
  description: string;
  difficulty: boolean;
  duration: string;
  prerequisites: any[];
  imgUrl: string;
  displayOrder: number;
  skills: any[];
  totalTasks: number;
};

export const getCourses = async () => {
  const response = await api.get<CourseType[]>("/courses");
  return response.data;
};
