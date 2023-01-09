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



{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {

          allBooks.books ? allBooks.books.map(e => (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345, maxHeight: 445 }}>
                <CardActionArea>
                  <Link to={'/book/' + e.id}>

                     <img src={e.imagelink} alt="Game" width={'300px'} height={'250px'} />
                  </Link>
                  <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                      {e.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e.description && `${e.description.slice(0, 80)} (...)`}
                    </Typography>
                  </CardContent>

                </CardActionArea>


                <CardActions>
                  <Button size="small" color="primary">
                    <BookmarkAddIcon />
                  </Button>
                  {`$ ${e.price} ARS`}
                </CardActions>
              </Card>
            </Grid>
          ))
            :
            <h1>Loading...</h1>
        }
      </Grid> */}