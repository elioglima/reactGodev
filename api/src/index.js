// rotas
const express = require("express");
const router = express.Router();

router.use("/postagem", require("./routes/postagem/"));

module.exports = router;
