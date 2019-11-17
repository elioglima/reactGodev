import logs from "../../logs";
import { exePost } from "../tools";
import { retornoSucesso, retornoErro } from "../generics";

export default async params => {
  logs("apiPostagemLista");

  const retornoMetodo = await exePost("postagem/salvar", params);
  logs("apiPostagemLista retornoMetodo", retornoMetodo);

  const { err, obj, msg } = retornoMetodo;

  if (err) return retornoErro(msg);

  return retornoSucesso("Sucesso", { response: obj.response });
};
