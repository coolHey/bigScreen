import request from "./request";

// 获取数据
export const getCompareData = (params) => {
  return request.post("/data/compareData", params);
};
