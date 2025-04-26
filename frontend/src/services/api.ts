import axios from "axios";
import { API_BASE_URL } from "@/config/apiConfig";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
