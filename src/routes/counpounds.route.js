const express = require("express");
const compoundsController = require("../controllers/compounds.controller");

const router = express.Router();

router.get("/", compoundsController.getList); // getList of compounds, offset, limit
router.post("/", compoundsController.uploadList); // create list of compounds. Edit if any of the compounds already exists
router.put("/:id", compoundsController.updateById); // update compound by id

module.exports = router;
