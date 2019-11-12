import request from "../request";

const retorno = (msg, err = true, data = {}) => ({ msg, err, data });

export default async params => {
  const json = require("../../temp/ListaPostagem.json");
  const dados = json.filter(field => field.id == params.id);

  // retorna os dados como sucesso
  return retorno("Sucesso", false, dados);
};
