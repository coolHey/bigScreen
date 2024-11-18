import request from "./request";
import qs from "qs";

// 获取列表
export const getListData = (params) => {
  return request.get("/monitor/runData/" + params.id +'?time=' + params.time);
};

// 新增设备
export const addDevice = (params) => {
  return request.post("/monitor/infoAdd", params);
};

// 删除设备
export const deleteDevice = (data) => {
  return request.post("/monitor/infoDelete/" + data.id);
};
