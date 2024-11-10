import request from "./request";

// 获取报警列表
export const getSoldPageData = (params) => {
  return request.get("/msg/soldPage", {
    params,
  });
};
