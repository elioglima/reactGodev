const DBPostagem = require("../../../../db/models/Postagem");
const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
  let ModeloRetornoClient = libObj.Assign(require("../../ModeloRetornoClient"));

  const rsDB = await DBPostagem.Editar(Dados);
  ModeloRetornoClient.status = 200;
  ModeloRetornoClient.erro = false;
  ModeloRetornoClient.mensagem = "Dados gravados com sucesso.";
  ModeloRetornoClient.response = {
    sucesso: true,
    mensagem: "Dados gravados com sucesso",
    Dados: rsDB
  };
  return ModeloRetornoClient;
};
