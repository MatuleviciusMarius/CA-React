import axios from "axios";
import { Task } from "../types/task";

const API_PORT = "3002";
const API_ENDPOINT = `http://localhost:${API_PORT}`;

const api = axios.create({
  baseURL: API_ENDPOINT,
});

export type TasksResponse = {
  tasks: Task[];
};

export const getTasks = async (courseId: string, jwt_token: string) => {
  const response = await api.get<TasksResponse>(`/tasks/course/${courseId}`, {
    headers: { authorization: jwt_token },
  });
  return response;
};

export type TaskResponse = {
  task: Task;
};

export const getTaskById = async (id: string, jwt_token: string) => {
  const response = await api.get<TaskResponse>(`/tasks/${id}`, {
    headers: { authorization: jwt_token },
  });
  return response;
};

export const getTaskByLevel = async (level: number, jwt_token: string) => {
  const response = await api.get<TasksResponse>(`/tasks/${level}`, {
    headers: { authorization: jwt_token },
  });
  return response;
};
