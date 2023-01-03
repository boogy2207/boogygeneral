/** @format */
const { Books } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");
require("dotenv").config();

const getBooks = async (req, res) => {
   try {
      // const allBooks = await Books.findAll({
      //    //include
      // });
      // if (!allBooks.lenght) {
      const url = await axios.get(
         "https://www.googleapis.com/books/v1/volumes?q=react+filter=free-ebooks&key=AIzaSyC3J4dErWqR63bwO9rBzpMBWrnSIKTmjbk"
      );
      const apiInfo = await url.data.items;

      console.log(apiInfo);
      // const booksInfo = await url.data;
      // booksInfo.items.map((e) => {
      //    return {
      //       id:e.items.id,
      //       title:e.items,
      //       authors:,
      //       description:,
      //       pagecount:,
      //       imagelink:,
      //       language:,
      //    }
      // });
      // } else {
      // }
   } catch (error) {
      console.log(error);
   }
};
getBooks();
module.exports = {
   getBooks,
};
