const router = require("express").Router();
const sortController = require("../controller/sort.controller");
router.get('/sortBy/:value',  sortController.sortBy);
module.exports = router;
