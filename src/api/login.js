import request from "./request";
import qs from "qs";

// 1.2登录
export const login = (params) => {
  return request.get("/user/login", {
    params,
  });
};

// 1.3注册
export const register = (data) => {
  return request.post("/user/register?" + qs.stringify(data));
};
