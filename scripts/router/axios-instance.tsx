import axios from "axios";
import settings from "../../settings.json";

export const axiosInstance = axios.create({
  baseURL:
    settings.environment == "development"
      ? `http://localhost:8878/api/`
      : `http://clettr.com/api/`,
  withCredentials: true,
});
