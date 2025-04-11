import request from "./request";

// 9.1售后记录次数
export const getSoldPageData = (params) => {
  return request.get("/sold/soldPage", {
    params,
  });
};
export const getDetailPageData = (params) => {
  return request.get("/sold/detailPage", {
    params,
  });
};

export const postDetailAdd = (data) => {
  return request.post("/sold/detailAdd", data);
};

// 9.2设备维保提醒
export const getMaintainData = (params) => {
  return request.get("/maintain/maintainPage", {
    params,
  });
};

export const postMaintainEdit = (data) => {
  return request.post("/maintain/maintainUpdate", data);
};

// 9.2.2维保提醒
export const postNotice = (id) => {
  return request.post("/msg/notice/" + id);
};

// 9.3.1故障报警页展示
export const getErrorPageData = (params) => {
  return request.get("/fault/faultPage", {
    params,
  });
};

export const postFaultUpdate = (data) => {
  return request.post("/fault/faultUpdate", data);
};
