const libObj = require("../../../../libs/fn_obj");

module.exports = req => {
  return new Promise((resolve, reject) => {
    let RetornoClient = libObj.Assign(require("../../ModeloRetornoClient"));

    try {
      RetornoClient.Status = 401;
      let ModelCadatro = {
        Id: 0
      };

      let r = libObj.Parse(req, ModelCadatro);

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
