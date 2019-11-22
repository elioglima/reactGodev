const libObj = require("../../../libs/fn_obj");
const admin = require("firebase-admin");

module.exports = async dados => {
  // definições de estrutura
  const estrutura = require("./estrutura");
  estrutura.parse(dados);

  // parse dos dados

  //   const db = admin.database();
  //   var ref = db.ref("/postagem");
  //   const err = await ref.set(demo);
  //   if (err) return { err: true, msg: "Erro ao criar demo." };
  return { err: false, msg: "Demontração criado com sucesso." };
};
