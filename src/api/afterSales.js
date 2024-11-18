import request from "./request";

// 9.1售后记录次数
export const getSoldPageData = (params) => {
  return request.get("/msg/soldPage", {
    params,
  });
};

// 9.2设备维保提醒
export const getMaintainData = (params) => {
  return request.get("msg/maintainPage", {
    params,
  });
};

// 9.2.2维保提醒
export const postNotice = (id) => {
  return request.post("/msg/notice/" + id);
};

// 9.3.1故障报警页展示
export const getErrorPageData = (params) => {
  return request.get("/msg/errorPage", {
    params,
  });
};
