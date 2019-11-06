import request from "./request";
import Cookies from "js-cookie";
import { adds } from '../libs/libDate'

export default async payload => {

  // Consulta boleto acordo no ws
  let retornoMetodo = await request("api/Cobranca/SolicitarLogin", {
    CodCredor: process.env.REACT_APP_CREDOR || 413,
    CpfCnpj: payload.cpf,
    App: process.env.REACT_APP_APPLICATION
  });

  const retorno = (msg, err = true, data = {}) => ({ msg, err, data });

  // validações dos dados
  if (!retornoMetodo) return retorno("Ops, sem resposta do servidor.");

  if (retornoMetodo.err === true)
    // erro previsto pela funcao request
    return retorno(retornoMetodo.msg);
  else if (retornoMetodo.obj.data.Retorno !== 0)
    // erro previsto no ws
    return retorno(
      retornoMetodo.obj.data.RetornoTexto ||
      "Estamos com uma lentidão temporária no sistema. Tente novamente mais tarde.",
      true,
      retornoMetodo.obj.data
    );

  var date = adds(new Date(), 'minute', process.env.REACT_APP_EXPIRES_COOKIES || 30)
  Cookies.set("name", retornoMetodo.obj.data.NomClien, { expires: date });
  Cookies.set("cpf", retornoMetodo.obj.data.CpfCnpj, { expires: date });
  Cookies.set("codclien", retornoMetodo.obj.data.CodClien, { expires: date });

  // retorna os dados como sucesso
  return retorno("Sucesso", false, retornoMetodo.obj.data);
};
