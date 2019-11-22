const libObj = require("../../../../libs/fn_obj");

module.exports = async Dados => {
  let ModeloRetornoClient = libObj.Assign(require("../../ModeloRetornoClient"));

  try {
    const dbPostagem = require("../../../../db/models/postagem");
    const { recordCount, data } = await dbPostagem.ListaTodos();
    let registros = data;
    if (recordCount === 0) {
      ModeloRetornoClient.mensagem = "Nenhum registro localizado";
      ModeloRetornoClient.response = {
        totalRegistros: 0,
        registros: {}
      };
      return ModeloRetornoClient;
    }

    ModeloRetornoClient.status = 200;
    ModeloRetornoClient.erro = false;
    ModeloRetornoClient.mensagem = "Registro Localizado";
    ModeloRetornoClient.response = {
      totalRegistros: recordCount,
      registros
    };
    return ModeloRetornoClient;
  } catch (error) {
    ModeloRetornoClient.status = 500;
    ModeloRetornoClient.erro = true;
    ModeloRetornoClient.mensagem = "Erro interno";
    ModeloRetornoClient.response = error;
    return ModeloRetornoClient;
  }
};
