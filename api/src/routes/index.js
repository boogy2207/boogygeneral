/** @format */
//It could be in different route files

const { Router } = require("express");
const cors = require("cors");
const { Book } = require("../db");

const booksRouteDB = require("./booksRoute");
const mercadoPagoRouteDB = require("./mercadoPagoRoute");

const router = Router();

router.use(cors());

router.use("/books", booksRouteDB);

// router.use("/payment", mercadoPagoRouteDB);

module.exports = router;
