import axios from "axios";

const service = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/api" : "http://146.56.215.178:9999",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ7XCJuYW1lXCI6XCJyb290XCJ9IiwiaXNzIjoidXByb2FyIiwiZXhwIjoxNzMxNzE2NDk1LCJ1cHJvYXIiOiIxMjM0NTYifQ.F7ICZOZg-yNLpIoTbVtqByY4d_9PUIT9SBZt5EVeoZo";
    config.headers["token"] = token;
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
