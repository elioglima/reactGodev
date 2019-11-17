const mongoose = require("mongoose");
const libObj = require("../../../../libs/fn_obj");

module.exports = req => {
  return new Promise((resolve, reject) => {
    let RetornoClient = libObj.Assign(require("../../ModeloRetornoClient"));

    try {
      RetornoClient.Status = 401;
      let ModelCadatro = {
        method: "",
        title: "",
        _id: "",
        id: 0,
        descriptions: "",
        category: "",
        "so-android": true,
        "so-ios": true,
        github: "",
        autor: "",
        stepsCount: -1,
        tags: [],
        steps: []
      };

      let r = libObj.Parse(req.registro, ModelCadatro, true);

      if (!req.method) {
        RetornoClient.Status = 401;
        RetornoClient.Erro = true;
        RetornoClient.Mensagem =
          "Paramêtro de identificção do metodo não foi identificado.";
        RetornoClient.Response = {};
        return reject(RetornoClient);
      }

      console.log(r);
      r.method = req.method;

      if (r.method === "novo") {
      } else if (r.method === "editar") {
        if (!mongoose.Types.ObjectId.isValid(r._id)) {
          RetornoClient.Status = 401;
          RetornoClient.Erro = true;
          RetornoClient.Mensagem = "Codigo único é inválido.";
          RetornoClient.Response = {
            Mensagem: "Codigo único é inválido.",
            _id: r._id
          };
          return reject(RetornoClient);
        }
      } else {
        RetornoClient.Status = 401;
        RetornoClient.Erro = true;
        RetornoClient.Mensagem =
          "Paramêtro de identificção do metodo não foi identificado.";
        RetornoClient.Response = {};
        return reject(RetornoClient);
      }

      RetornoClient.Status = 200;
      RetornoClient.Erro = false;
      RetornoClient.Mensagem = "Sucesso";
      RetornoClient.Response = r;
      return resolve(RetornoClient);
    } catch (error) {
      RetornoClient.Status = 500;
      RetornoClient.Erro = false;
      RetornoClient.Mensagem =
        "Erro Interno - na validação dos paramêtros de entrada.";
      RetornoClient.Response = error;
      return reject(RetornoClient);
    }
  });
};
