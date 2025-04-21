import request from "./request";
import qs from "qs";

// 获取报警列表
export const getListData = (params) => {
  return request.get("/msg/warnPage", {
    params,
  });
};

// 导出报警列表
export const doWarnExport = (params) => {
  return request.get("/msg/warnExport", {
    params,
    responseType: 'blob',
    responseEncoding: "utf8"
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
