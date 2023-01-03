/** @format */
//It could be in different route files
const router = require("express").Router();
const { getProducts } = require("../controllers/product");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.get("/product", getProducts);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
