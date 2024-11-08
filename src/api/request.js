import axios from "axios";

const service = axios.create({
  baseURL: "http://146.56.215.178:9999",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem("token");
    config.headers["Authorization"] = token;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
