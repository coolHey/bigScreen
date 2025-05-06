import request from "./request";

// 获取列表
export const getListData = (id, params) => {
  return request.get("/data/lineData/" + id, { params: params });
};

// 获取左右两侧数据
export const getAutoData = (params, query) => {
  return request.get("/data/autoData/" + params.id, { params: query });
};
// 点击折线图获取右边数据
export const getLineOne = (params, query) => {
  return request.get("/data/lineOne/" + params.id, { params: query });
};

export const getCompareData = (data) => {
  return request.post("/data/compareData", data);
};

// 新增设备
export const addDevice = (params) => {
  return request.post("/data/infoAdd", params);
};

// 删除设备
export const deleteDevice = (data) => {
  return request.post("/data/infoDelete/" + data.id);
};
