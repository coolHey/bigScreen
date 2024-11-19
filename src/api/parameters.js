import request from "./request";
import qs from "qs";

// 获取数据
export const getCompareData = (params) => {
  return request.post("/monitor/compareData", params);
};
