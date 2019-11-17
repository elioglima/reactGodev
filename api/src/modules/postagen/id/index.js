const Request = require("./Request");
const Response = require("./Response");

module.exports = (req, res) => {
  console.log("Route postagem/:id");

  Request(req)
    .then(async dados => {
      res.status(200).json(await Response(dados.Response));
    })
    .catch(dados => {
      res.status(dados.Status).json(dados);
    });
};
