import config from "../../../config";
import { usePost } from "../../tools";
import { retornoSucesso, retornoErro } from "../../generics";

export default async (email, password) => {
  let url = config.Firebase.url_googleapi;
  url += "accounts:signInWithPassword?key=";
  url += config.Firebase.apiKey;

  const retornoMetodo = await usePost(url, { email, password });
  const { err, obj, msg } = retornoMetodo;

  if (err) return retornoErro(msg);

  return retornoSucesso("Sucesso", { ...obj });
};
