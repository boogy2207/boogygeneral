/** @format */
const { Books } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");
require("dotenv").config();

const getBooks = async (req, res) => {
   const { title } = req.query;
   if (!title) {
      try {
         const allBooks = await Book.findAll({
            // include: {
            //    model: category,
            //    attributes: ["title", "category","description","pages"],
            //    through: { attributes: [] },
            // },
         });
         if (!allBooks.length) {
            //si está vacío
            const url = await axios.get(
               "https://www.googleapis.com/books/v1/volumes?q={title}+filter=free-ebooks&key=AIzaSyC3J4dErWqR63bwO9rBzpMBWrnSIKTmjbk"
            );
            const urlData = await urlData.data.items;

            const booksInfo = await urlData.map((e) => {
               return {
                  id: e.id,
                  title: e.volumeInfo.title,
                  authors: e.volumeInfo.authors[0],
                  description: e.volumeInfo.description,
                  pagecount: e.volumeInfo.description,
                  imagelink: e.volumeInfo.imageLinks.thumbnail,
                  language: e.volumeInfo.language,
                  price: e.saleInfo.retailPrice
                     ? e.saleInfo.retailPrice
                     : "Free Book",
               };
            });
            booksInfo.forEach((z) => {
               book.findOrCreate({
                  where: {
                     id: z.id,
                     title: z.title,
                     authors: z.flags,
                     description: z.continents,
                     pagecount: z.capital,
                     imagelink: z.subregion,
                     language: z.area,
                     price: z.population,
                  },
               });
            });
            return res.status(200).send(apiInfo);
         } else {
            return res.status(200).send(allBooks);
         }
      } catch (error) {
         console.log(error);
      }
   } else {
      try {
         const booksByTitle = await Book.findAll({
            where: {
               title: { [Op.iLike]: `%${title}%` },
            },
         });
         if (booksByTitle.length) {
            return res.status(200).send(booksByTitle);
         } else {
            return res.status(404).send({
               error: "Book not found.",
               title: `${title}`,
            });
         }
      } catch (error) {
         console.log(error);
      }
   }
};

module.exports = {
   getBooks,
};
