const express = require("express");
const compoundsController = require("../controllers/compounds.controller");

const router = express.Router();

router.get("/", compoundsController.getList); // getList of compounds, offset, limit
router.get("/getLen", compoundsController.getLen); // get length of compounds list
router.get("/:id", compoundsController.getById); // get compound by id
router.post("/", compoundsController.uploadList); // create list of compounds. Edit if any of the compounds already exists
router.post("/createOne", compoundsController.createOne);
router.put("/:id", compoundsController.updateById); // update compound by id
router.delete("/:id", compoundsController.deleteById); // delete compound by id

module.exports = router;
