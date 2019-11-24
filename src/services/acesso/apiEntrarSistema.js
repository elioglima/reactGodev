import logs from "../../logs";
import { exePost } from "../tools";
import { retornoSucesso, retornoErro } from "../generics";

export default async () => {
  logs("apiEntrarSistema");

  const retornoMetodo = await exePost("acesso/entrar");
  logs("apiEntrarSistema retornoMetodo", retornoMetodo);

  const { err, obj, msg } = retornoMetodo;

  if (err) return retornoErro(msg);

  return retornoSucesso("Sucesso", {
    totalRegistros: obj.response.registros.length,
    registros: obj.response.registros
  });
};
