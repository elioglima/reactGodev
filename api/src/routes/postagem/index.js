const express = require("express");
const router = express.Router();

router.post("/id", require("../../modules/postagen/id"));
router.post("/todos", require("../../modules/postagen/todos"));
router.post("/salvar", require("../../modules/postagen/salvar"));
router.get("/teste", require("../../modules/teste"));
module.exports = router;
