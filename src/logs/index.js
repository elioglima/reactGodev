import config from "../config";
export default (message, ...msgArray) => {
  if (!config.Debug) return;
  console.log("LOG:", message, msgArray.length > 0 ? msgArray : "");
};
