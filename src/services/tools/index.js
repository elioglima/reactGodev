export const exePost = (method, data, timeout) =>
  require("./http").post(method, data, timeout);
