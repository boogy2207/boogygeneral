import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../store/slices/books/booksActions';
import { Link } from 'react-router-dom';


function Cards() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  const allBooks = useSelector(state => state.books)

  return (
    <div className='mt-10 grid justify-center items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {
        allBooks.books && allBooks.books.map((book, i) => (
          <div key={i} className="card card-compact max-w-xs rounded-md mx-4 bg-base-100 shadow-xl col-span-1">
            <Link to={`/book/${book.id}`}>
              <figure><img src={book.imagelink} alt={book.title} /></figure>
              <div className="card-body">
                <h2 className="card-body">{book.title}</h2>
                <div className="badge badge-secondary">{isNaN(parseFloat(book.price)) ? `${book.price}` : `$ ${book.price}`}</div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Cards;