/** @format */
//It could be in different route files

const { Router } = require("express");
const {Book} = require("../db")

const router = Router();

const booksRouteDB = require("./booksRoute");

router.use("/books", booksRouteDB);






module.exports = router;
