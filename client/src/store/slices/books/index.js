import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: []
    },
    reducers: {
        getAllBooks: (state,action) => {
            state.books = action.payload
        }
    }
})

export const {getAllBooks} = bookSlice.actions

export default bookSlice.reducer