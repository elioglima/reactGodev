import { exePost } from "../tools";
import { retornoSucesso, retornoErro } from "../generics";

export default async params => {
  const { retornoMetodo } = await exePost("postagem/id", params);
  const { err, msg, obj } = retornoMetodo;

  if (err) return retornoErro(msg);

  // retorna os dados como sucesso
  return retornoSucesso("Sucesso", { registro: obj.data.registro });
};
