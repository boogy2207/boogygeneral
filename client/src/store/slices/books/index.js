import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    allBookys: [],
  },
  reducers: {
    getAllBooks: (state, action) => {
      state.books = action.payload;
      state.allBookys = action.payload;
    },
    price: (state, action) => {
      let ordenSort;

      if (action.payload === "ASC") {
        ordenSort = state.allBookys.sort((a, b) => {
          console.log(
            typeof a.price === "number" && typeof b.price === "number"
          );
          
          if (typeof a.price === "number" && typeof b.price === "number") {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
          }

          if (typeof a.price === "string" && !isNaN(b.price)) {
            return 1;
          }

          if (typeof b.price === "string" && !isNaN(a.price)) {
            return -1;
          }
        });
      }

      if (action.payload === "DESC") {
        ordenSort = state.allBookys.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
      }

      state.books = ordenSort;
    },
    filter: (state, action) => {
      if (action.payload === "ALL") {
        state.books = state.allBookys.filter((e) => e);
      } else {
        const filterGenres = state.allBookys.filter(
          (e) => action.payload === e.category
        );
        state.books = filterGenres;
      }
    },
  },
});

export const { getAllBooks, price, filter } = bookSlice.actions;

export default bookSlice.reducer;
