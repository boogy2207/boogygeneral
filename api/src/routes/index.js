/** @format */
//It could be in different route files

const { Router } = require("express");
const cors = require("cors");
const { Book } = require("../db");
const booksRouteDB = require("./booksRoute");
const router = Router();

const mercadoPago = require("./mercadoPago");
router.use(cors());

router.use("/books", booksRouteDB);
router.use("/payment", mercadoPago);

module.exports = router;
