import axios from "axios";
import config from "../../../config";
import logs from "../../../logs";
import { retornoSucesso, retornoErro } from "../../generics";

export const post = (method, data = {}, timeout = 120000) => {
  return new Promise(async resolve => {
    let axiosInstance = axios.create();
    let headers = {
      "Content-Type": "application/json;charset=UTF-8"
    };

    const url = `${config.API.URL}/${method}`;
    logs("http.post", url, data);

    await new Promise(resolve => setTimeout(resolve, 1000));

    await axiosInstance({
      method: "post",
      url,
      data,
      timeout,
      headers
    })
      .then(response => {
        if (!response.status) {
          logs("http.post.retorno.sucesso.erro", url, method, response);
          return resolve(
            retornoErro("Erro status de resposta não localizado.")
          );
        }

        if (response.status !== 200) {
          logs(
            "http.post.retorno.sucesso.erro - statusCode diferente de 200",
            url,
            method,
            response
          );
          return resolve(retornoErro(response.statusText));
        }

        logs("http.post.retorno.sucesso", url, method, response.data);
        return resolve(retornoSucesso("Sucesso", response.data));
      })
      .catch(err => {
        logs("http.post.retorno.erro", url, method, err);
        return resolve(retornoErro("catch(err", {}));
      });
  });
};
