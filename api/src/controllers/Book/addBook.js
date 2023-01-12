const addBook = async (req, res) => {
   if ((title, authors, description, pagecount, imagelink, language, price)) {
      throw "Incomplete information sent";
   } else {
      const {
         title,
         authors,
         description,
         pagecount,
         imagelink,
         language,
         price,
      } = req.body;
      try {
         const newBook = {
            title,
            authors,
            description,
            pagecount,
            imagelink,
            language,
            price,
         };
         const createBook = await Book.create(newBook);
         Country.addBook(createBook);
         return res.status(200).send("Book created successfully");
      } catch {
         return res.status(404).send(error);
      }
   }
};
