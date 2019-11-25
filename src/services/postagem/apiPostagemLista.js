import logs from "../../logs";
import { exePost } from "../tools";
import { retornoSucesso, retornoErro } from "../generics";

export default async () => {
  // logs("apiPostagemLista");

  // const retornoMetodo = await exePost("postagem/todos");
  // logs("apiPostagemLista retornoMetodo", retornoMetodo);

  // const { err, obj, msg } = retornoMetodo;

  // if (err) return retornoErro(msg);

  return retornoSucesso("Sucesso", {
    totalRegistros: 0,
    registros: []
  });
};
