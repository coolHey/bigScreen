import request from "./request";

// 客户档案页展示
export const getArchivePageData = (params) => {
  return request.get("/client/archivePage", {
    params,
  });
};

// 8.2更新客户信息
export const updateCustomer = (data) => {
  return request.post("/client/archiveUpdate", data);
};
