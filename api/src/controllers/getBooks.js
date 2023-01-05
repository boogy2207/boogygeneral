/** @format */
const { Book } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
require("dotenv").config();

const getBooks = async (title) => {
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
               "https://www.googleapis.com/books/v1/volumes?q={all}&key=AIzaSyC3J4dErWqR63bwO9rBzpMBWrnSIKTmjbk"
            );
            console.log(url);
            const urlData = await url.data.items;

            const booksInfo = await urlData.map((e) => {
               return {
                  id: e.id,
                  title: e.volumeInfo.title,
                  authors: e.volumeInfo.authors[0],
                  description: e.volumeInfo.description,
                  category: e.volumeInfo.categories[0],
                  pagecount: e.volumeInfo.description,
                  imagelink: e.volumeInfo.imageLinks.thumbnail,
                  language: e.volumeInfo.language,
                  price: e.saleInfo.retailPrice
                     ? e.saleInfo.retailPrice
                     : "Free Book",
               };
            });
            booksInfo.forEach((z) => {
               Book.findOrCreate({
                  where: {
                     id: z.id,
                     title: z.title,
                     authors: z.authors,
                     description: z.description,
                     category: z.category,
                     pagecount: z.pagecount,
                     imagelink: z.imagelink,
                     language: z.language,
                     price: z.price,
                  },
               });
            });
            return res.status(200).send(apiInfo);
         } else {
            console.log(error);
         }
      } catch (error) {
         return res.status(400).send("It doesnt work");
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
