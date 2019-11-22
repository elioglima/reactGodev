const admin = require("firebase-admin");

module.exports.SalvarDemo = async () => {
  const db = admin.database();
  const demo = require("./demo.json");

  var ref = db.ref("/postagem");
  const err = await ref.set(demo);
  if (err) return { err: true, msg: "Erro ao criar demo." };
  return { err: false, msg: "Demontração criado com sucesso." };
};

module.exports.ListaTodos = async () => {
  const db = admin.database();
  var ref = db.ref("/postagem");
  const retornoDB = await ref.once("value");
  const dadosTemp = retornoDB.val();
  if (!Array.isArray(dadosTemp)) dadosTemp = [dadosTemp];
  return { recordCount: dadosTemp.length, data: dadosTemp };
};

module.exports.Salvar = dados => require("./salvar")(dados);
