import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../store/slices/books/booksActions';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"

function Cards() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  const allBooks = useSelector(state => state.books)

  return (
    <>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {

          allBooks.books ? allBooks.books.map(e => (
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <Link to={'/book/' + e.id}>
                    <CardMedia
                      component="img"
                      height='auto'
                      image={e.imagelink}
                      alt="book"
                    />
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
      </Grid>
    </>
  )
}

export default Cards