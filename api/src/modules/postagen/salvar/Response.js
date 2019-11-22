const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
  let ModeloRetornoClient = libObj.Assign(require("../../ModeloRetornoClient"));
  const dbPostagem = require("../../../../db/models/postagem");

  const rsDB = await dbPostagem.Salvar(Dados);
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
