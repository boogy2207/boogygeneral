import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import books from "./slices/books";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        books: books
    },
});
