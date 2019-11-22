module.exports = async (req, res) => {
  console.log("Route postagem/teste");
  const postagen = require("../../../db/models/Postagem");
  const jsonDados = require("../../../db/models/postagem/demo.json");
  return res.status(200).json(await postagen.Salvar(jsonDados));
};
