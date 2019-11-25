import logs from "../../logs";
import { SignInWithPassword } from "../firebase";
import { retornoSucesso, retornoErro } from "../generics";

export default async ({ email, password }) => {
  logs("apiEntrarSistema");
  const retornoMetodo = await SignInWithPassword(email, password);

  logs("apiEntrarSistema retornoMetodo", retornoMetodo);
  const { err, obj, msg } = retornoMetodo;

  if (err) return retornoErro(msg);

  require("../../libs/fn_cookies").salvar("token", obj.idToken);

  return retornoSucesso("Sucesso", obj);
};
