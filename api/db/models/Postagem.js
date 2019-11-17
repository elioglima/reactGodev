const mongoose = require("mongoose");

let PostagemSchema = new mongoose.Schema(
  {
    title: { type: String },
    descriptions: { type: String },
    category: { type: String },
    github: { type: String },
    autor: { type: String },
    stepsCount: { type: Number },
    steps: { type: Array }
  },
  { collection: "Postagem" }
);

let Postagem = mongoose.model("Postagem", PostagemSchema);
module.exports = Postagem;

const Find = dados =>
  new Promise(async resolve => {
    let query = await Postagem.find(dados);
    return resolve({ retorno: query });
  });

const FindTodos = Dados =>
  new Promise(async resolve => {
    let where = {};
    if (Dados.Id && parseInt(Dados.Id) > 0) {
      where = { Id: Dados.Id };
    }
    const { retorno } = await Find(where);
    const registros = retorno ? retorno : [];
    return resolve(registros);
  });

const FindId = Dados => {
  return Find({
    _id: Dados._id
  });
};

module.exports.Novo = dados =>
  new Promise(async resolve => {
    delete dados._id;
    const model = new Postagem(dados);
    return await model
      .save()
      .then(resultado =>
        resolve({ RetornoMetodo: { Erro: false, Response: resultado } })
      )
      .catch(err => resolve({ RetornoMetodo: { Erro: true, Response: err } }));
  });

module.exports.Editar = dados =>
  new Promise(async resolve => {
    return await Postagem.findById(dados._id, function(err, doc) {
      if (err)
        return resolve({
          RetornoMetodo: { Erro: true, Response: err }
        });

      let DadosAr = Object.keys(dados);
      for (let iDadosAr = 0; iDadosAr < DadosAr.length; iDadosAr++) {
        const element = DadosAr[iDadosAr];
        doc[element] = dados[element];
      }

      doc
        .save()
        .then(resultado => {
          try {
            resolve({
              RetornoMetodo: {
                Erro: false,
                Mensagem: "Dados gravados com sucesso.",
                Response: resultado
              }
            });
          } catch (err) {
            resolve({ RetornoMetodo: { Erro: true, Response: err } });
          }
        })
        .catch(err =>
          resolve({ RetornoMetodo: { Erro: true, Response: err } })
        );
    });
  });

module.exports.Find = Find;
module.exports.FindId = FindId;
module.exports.FindTodos = Dados => FindTodos(Dados);
