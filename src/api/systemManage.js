import request from "./request";

// 7消息通知
export const getNoticePageData = (params) => {
  return request.get("/msg/noticePage", {
    params,
  });
};

// 登录日志页展示
export const getLoginLogPageData = (params) => {
  return request.get("/user/logPage", {
    params,
  });
};
