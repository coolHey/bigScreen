import request from "./request";
import qs from "qs";

// 获取列表
export const getListData = (id, params) => {
  return request.get("/data/lineData/" + id, { params: params });
};

// 获取左右两侧数据
export const getAutoData = (params, query) => {
  return request.get("/data/autoData/" + params.id, { params: query });
};

// 新增设备
export const addDevice = (params) => {
  return request.post("/data/infoAdd", params);
};

// 删除设备
export const deleteDevice = (data) => {
  return request.post("/data/infoDelete/" + data.id);
};
