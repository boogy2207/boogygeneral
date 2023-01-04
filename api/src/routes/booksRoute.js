const { Router } = require("express");

const booksRoute = Router();

booksRoute.get("/", async (req, res) => {
   try {
      const allBooks = await getBooks();
      res.status(200).send(allBooks);
   } catch (error) {
      res.status(404).send({ error: error });
   }
});

module.exports = Router;
