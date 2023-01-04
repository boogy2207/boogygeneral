/** @format */
//It could be in different route files
const { Router } = require("express");

const { router } = require("../app");

const { booksRoute } = require("./booksRoute");

router.use("/books", booksRoute);

module.exports = Router;
