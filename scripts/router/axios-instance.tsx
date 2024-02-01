import axios from "axios";
import settings from "../../settings.json";

export const axiosInstance = axios.create({
  baseURL:
    settings.environment == "development"
      ? `http://localhost:8878/`
      : `http://159.223.39.105:8878/`,
  withCredentials: true,
});
