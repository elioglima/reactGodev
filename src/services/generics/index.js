export const retornoAPI = (msg, data, err) =>
  require("./models/retornoAPI").execute(msg, data, err);

export const retornoSucesso = (msg, data) =>
  require("./models/retornoAPI").execute(msg, data, false);

export const retornoErro = (msg, data) =>
  require("./models/retornoAPI").execute(msg, data, true);
