import axios from "axios";
// TODO::env化
const BASE_URL = "http://api:3000/posts";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
