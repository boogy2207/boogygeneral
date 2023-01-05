/** @format */
//It could be in different route files
const { Router } = require("express");

const router = Router();

const booksRoute = require("./booksRoute");

router.use("/books", booksRoute);

module.exports = router;
