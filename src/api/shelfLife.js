import request from "./request";
import qs from "qs";

// 获取设备质保期列表
export const getListData = (params) => {
  return request.get("/monitor/infoWarranty", {
    params,
  });
};

// 新增设备质保
export const addShelfLife = (params) => {
  return request.post("/monitor/infoAdd", params);
};

// 新增设备质保
export const upDateShelfLife = (params) => {
  return request.post("/monitor/warrantyUpdate", params);
};

// 删除设备质保
export const deleteShelfLife = (data) => {
  // return request.post("/monitor/infoDelete/" + data.id);
};
