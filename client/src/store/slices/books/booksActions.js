import axios from 'axios'
import { getAllBooks } from './index'

export const getBooks = () => (dispatch) => {
    axios("/books")
    .then(res => dispatch(getAllBooks(res.data)))
    .catch(e => console.log(e))
}