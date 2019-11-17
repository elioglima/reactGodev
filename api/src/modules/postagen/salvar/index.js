const Request = require("./Request");
const Response = require("./Response");

module.exports = (req, res) => {
  console.log("Route postagem/salvar");

  Request(req.body)
    .then(async dados => {
      res.status(200).json(await Response(dados.Response));
    })
    .catch(dados => {
      res.status(200).json(dados);
    });
};
