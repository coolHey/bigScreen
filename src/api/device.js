import request from "./request";
import qs from "qs";

// 获取列表
export const getListData = (params) => {
  return request.get("/monitor/infoPage", {
    params,
  });
};

// 新增设备
export const addDevice = (params) => {
  return request.post("/monitor/infoAdd", params);
};

// 修改设备
export const upDateDevice = (params) => {
  return request.post("/monitor/infoUpdate", params);
};

// 删除设备
export const deleteDevice = (data) => {
  return request.post("/monitor/infoDelete/" + data.id);
};


// 获取省级列表
export const getProvinces = (params) => {
  return request.get("/common/provinces", {
    params,
  });
};

// 获取市级列表
export const getCities = (params) => {
  return request.get("/common/cities/" + params.provinceId);
};

// 获取区级列表
export const getAreas = (params) => {
  return request.get("/common/areas/" + params.cityId);
};
