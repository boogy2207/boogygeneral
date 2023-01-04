import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import styles from './card.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../store/slices/books/booksActions';

function Cards(){

   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getBooks())
   })

    return(
        <Card sx={{ maxWidth: 200}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/686600.jpg"
            alt="book"
          />
          <CardContent>
            <div className={styles.div}>
                   <Typography gutterBottom variant="h5" component="div">
              Harry Potter
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Todas las recetas del magico mundo de Harry Potter para convertir tu mesa en un banquete digno ¡del Gran Comedor de Hogwarts!  ¿Hay alguien en el mundo capaz de leer los libros de Harry Potter sin que se le haga la boca aguar La comida es un elemento espectacular de la saga creada por J.K. Rowlin
            </Typography>
            </div>
         
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <BookmarkAddIcon/>
          </Button>
        </CardActions>
      </Card>
    )
}

export default Cards