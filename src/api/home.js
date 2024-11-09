import request from "./request";

// 2首页
export const getHome = () => {
  return request.get("/home");
};
