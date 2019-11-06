import axios from "axios";
import Cookies from "js-cookie";

export default (method, data, timeout = 30000) =>
  new Promise(async (resolve, reject) => {
    let headers = {
      // "Content-Type": "text/xml;charset=UTF-8",
      "Content-Type": "application/json;charset=UTF-8",
      "token-id": Cookies.get("id")
    };

    const retorno = (err = true, msg = "Erro Inesperado", obj) =>
      resolve({ err, msg, obj });

    let url = `${process.env.REACT_APP_URL_WS}/${method}`
    // console.log("request data", url, data);
    await axios
      .post(url, data, {
        headers,
        timeout,
        method: "post"
      })
      .then(response => {
        // console.log("Request - Retorno", method, response);
        if (response.status !== 200) return retorno(true, response.statusText);
        if (!response.data) return retorno(true, 'Nenhum dados retornou do servidor');

        return retorno(false, "Sucesso", response);
      })
      .catch(err => {
        // console.log("request err", method, err);
        return retorno(
          true,
          err.message + " :: catch(err",
          err.message + " :: catch(err"
        );
      });
  });

export const Post = (url, data, headers, timeout = 30000) =>
  new Promise(async (resolve, reject) => {

    let HeaderConfig = {
      "Content-Type": "application/json"
      // ...headers && headers
    };

    const retorno = (err = true, msg = "Erro Inesperado", obj) =>
      resolve({ err, msg, obj });

    await axios
      .post(url, data, {
        headers: HeaderConfig,
        timeout,
        method: "POST"
      })
      .then(response => {
        // console.log(url, response)
        if (response.status !== 200) return retorno(true, response.statusText);
        return retorno(false, "Sucesso", response);
      })
      .catch(err => {
        // console.log(url, err)
        return retorno(
          true,
          "Estamos com uma lentidão temporária no sistema. Tente novamente mais tarde.",
          err.message + " :: catch(err"
        );
      });
  });
