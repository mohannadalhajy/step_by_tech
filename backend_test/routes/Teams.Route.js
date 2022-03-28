const express = require("express");
const router = express.Router();
const controller = require("../controllers/Teams.Controller");
const path = require('path');
//Get a list of all KeyWords
router.post("/", controller.add);
router.get("/", controller.getAll);
router.delete("/:id", controller.delete);
router.patch("/:id", controller.update);
router.get("/:id", controller.findById);
module.exports = router;