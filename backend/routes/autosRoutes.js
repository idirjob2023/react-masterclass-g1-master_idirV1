const express = require("express");
const router = express.Router();
const { getAutos , createAuto, getAutosQuery} = require("../controllers/autoController");

router.get("/", getAutos);
router.get("/query", getAutosQuery);
router.post("/", createAuto);
module.exports = router;