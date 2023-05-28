const router = require("express").Router();
const paginationController = require("../controller/pagination.controller");

router.post('', paginationController.getCurrentPage);
module.exports = router;