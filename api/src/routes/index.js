/** @format */
//It could be in different route files
const router = require("express").Router();
const { getBooks } = require("../controllers/getBooks");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.get("/books", getBooks);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
