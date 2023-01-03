const { Router } = require("express");
const { router } = require("../app");
const getBooks = require("../controllers/getBooks");

router.use("/books", getBooks);

module.exports = router;
