export const usePost = (method, data, timeout) =>
  require("./http").post(method, data, timeout);
