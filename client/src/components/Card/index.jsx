import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../store/slices/books/booksActions';
import Grid from '@mui/material/Grid';

function Cards() {

  const bookss = [
    {
      "id": "uf-rDwAAQBAJ",
      "title": "How to Find Free e-Books and Free Content for your Kindle",
      "description": "Everything You Need to Feed Your Kindle With the Best Content, Free! The First Complete Kindle Guide to Quality Free Content For Kindle Users In a single, concise but detailed practical book all the tips and advice you'll ever need to deliver the best content of your choice on your Kindle reader. Three Invaluable Strategies To Fill Your Kindle Reader With Your Favorite Content: Web Article and News, Books and More. A Guide to Collect and Read Web Content Offline Grab Web articles,Wikipedia pages, Blog and News Feeds and send them automatically to your Kindle reader for offline reading, formatted for the most comfortable reading experience just like any ebook! A Guide to Finding Any Free Book Available on Amazon and Other Sources Learn how to spot the best free ebooks available for your Kindle both on the Amazon website and other great websites in any category you want, and keep updated on new freebies daily so you don't miss a chance! A Guide to Convert Any Book and File in the Standard Kindle Format Discover and use all the best resources and tools to convert any file format to the native Kindle one: not just ePub or PDF, convert any old and new digital book and document format to your Kindle quickly and easily!",
      "pagecount": "Everything You Need to Feed Your Kindle With the Best Content, Free! The First Complete Kindle Guide to Quality Free Content For Kindle Users In a single, concise but detailed practical book all the tips and advice you'll ever need to deliver the best content of your choice on your Kindle reader. Three Invaluable Strategies To Fill Your Kindle Reader With Your Favorite Content: Web Article and News, Books and More. A Guide to Collect and Read Web Content Offline Grab Web articles,Wikipedia pages, Blog and News Feeds and send them automatically to your Kindle reader for offline reading, formatted for the most comfortable reading experience just like any ebook! A Guide to Finding Any Free Book Available on Amazon and Other Sources Learn how to spot the best free ebooks available for your Kindle both on the Amazon website and other great websites in any category you want, and keep updated on new freebies daily so you don't miss a chance! A Guide to Convert Any Book and File in the Standard Kindle Format Discover and use all the best resources and tools to convert any file format to the native Kindle one: not just ePub or PDF, convert any old and new digital book and document format to your Kindle quickly and easily!",
      "imagelink": "http://books.google.com/books/content?id=uf-rDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "en",
      "price": {
        "amount": 90.36,
        "currencyCode": "ARS"
      }
    },
    {
      "id": "U5jIDwAAQBAJ",
      "title": "De ratones y hombres",
      "description": "De ratones y hombres narra la historia de Lennie, un deficiente mental, y su compañero y ángel de la guarda George, dos braceros al borde de la indigencia. Contratados en una granja regentada por un ex boxeador, la insatisfecha esposa del patrón pone en serios aprietos a Lennie, que la mata accidentalmente y huye al bosque. Un conmovedor canto a la amistad y sobre todo una novela intensa con unos diálogos ejemplares y perfectamente construida, de la que ningún lector podrá olvidar su desenlace. Coincidiendo con el centenario de John Steinbeck, hemos publicado con una presentación como se merece el autor esta obra y otras dos \"La perla\" y \"Hubo una vez una guerra\".",
      "pagecount": "De ratones y hombres narra la historia de Lennie, un deficiente mental, y su compañero y ángel de la guarda George, dos braceros al borde de la indigencia. Contratados en una granja regentada por un ex boxeador, la insatisfecha esposa del patrón pone en serios aprietos a Lennie, que la mata accidentalmente y huye al bosque. Un conmovedor canto a la amistad y sobre todo una novela intensa con unos diálogos ejemplares y perfectamente construida, de la que ningún lector podrá olvidar su desenlace. Coincidiendo con el centenario de John Steinbeck, hemos publicado con una presentación como se merece el autor esta obra y otras dos \"La perla\" y \"Hubo una vez una guerra\".",
      "imagelink": "http://books.google.com/books/content?id=U5jIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "es",
      "price": {
        "amount": 839.99,
        "currencyCode": "ARS"
      }
    },
    {
      "id": "62opDwAAQBAJ",
      "title": "Jardín de invierno",
      "description": "Una gran historia de amor ambientada en la Segunda Guerra Mundial de Kristin Hannah, la autora de El Ruiseñor. Una ciudad sitiada. Una madre. Dos hijas. Y un secreto que cambiará sus vidas para siempre. URSS, 1941. Leningrado es una ciudad sitiada, aislada de toda posibilidad de ayuda por la guerra y la nieve que entierra los edificios con su blancura. Pero en Leningrado también hay mujeres sumidas en la desesperación, capaces de cualquier cosa para salvar a sus hijos y a sí mismas de un final trágico. Estados Unidos, 2000. La pérdida y los años han causado estragos en Anya Whitson. Finalmente ha conseguido contactar con sus hijas, Nina y Meredith. Y con una voz vacilante e insegura, empieza a entretejer la historia de una bella y joven rusa que vivió en Leningrado hace mucho tiempo... En una cruzada en busca de la verdad oculta tras la historia, las dos hermanas se enfrentarán a un secreto que hará tambalear los cimientos de su familia y cambiará para siempre la imagen de quiénes creían ser. Reseñas: «Una lectura apasionante.» Booklist «La mejor y más profunda novela que ha escrito Hannah hasta la fecha.» The Huffington Post «Una poderosa historia de amor, familia y mujeres supervivientes. Un relato fascinante que cose la realidad y los cuentos de hadas que no siempre acaban como uno espera.» The Herald News «A los lectores les va a costar no reír un poco y llorar un poco más cuando la madre y las hijas se encuentren unas a otras justo a tiempo.» Publishers Weekly",
      "pagecount": "Una gran historia de amor ambientada en la Segunda Guerra Mundial de Kristin Hannah, la autora de El Ruiseñor. Una ciudad sitiada. Una madre. Dos hijas. Y un secreto que cambiará sus vidas para siempre. URSS, 1941. Leningrado es una ciudad sitiada, aislada de toda posibilidad de ayuda por la guerra y la nieve que entierra los edificios con su blancura. Pero en Leningrado también hay mujeres sumidas en la desesperación, capaces de cualquier cosa para salvar a sus hijos y a sí mismas de un final trágico. Estados Unidos, 2000. La pérdida y los años han causado estragos en Anya Whitson. Finalmente ha conseguido contactar con sus hijas, Nina y Meredith. Y con una voz vacilante e insegura, empieza a entretejer la historia de una bella y joven rusa que vivió en Leningrado hace mucho tiempo... En una cruzada en busca de la verdad oculta tras la historia, las dos hermanas se enfrentarán a un secreto que hará tambalear los cimientos de su familia y cambiará para siempre la imagen de quiénes creían ser. Reseñas: «Una lectura apasionante.» Booklist «La mejor y más profunda novela que ha escrito Hannah hasta la fecha.» The Huffington Post «Una poderosa historia de amor, familia y mujeres supervivientes. Un relato fascinante que cose la realidad y los cuentos de hadas que no siempre acaban como uno espera.» The Herald News «A los lectores les va a costar no reír un poco y llorar un poco más cuando la madre y las hijas se encuentren unas a otras justo a tiempo.» Publishers Weekly",
      "imagelink": "http://books.google.com/books/content?id=62opDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "es",
      "price": {
        "amount": 1339.99,
        "currencyCode": "ARS"
      }
    },
    {
      "id": "Q4lXZ6dgEhcC",
      "title": "Microsoft Office Excel 2007",
      "imagelink": "http://books.google.com/books/content?id=Q4lXZ6dgEhcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "en",
      "price": "Free Book"
    },
    {
      "id": "J1_QBAAAQBAJ",
      "title": "Magento Made Easy - Free Magento module development tutorial ebook",
      "description": "Magento Made Easy - Comprehensive Guide to Magento Setup and Development is a free and easy to use Magento book. It gives you the fundamental background of Magento with two parts: Magento Overview and Magento Module Development. This e-book is the first volume with two parts: Magento Overview and Module Development. - Part 01. Magento Overview: The first part is an introduction to Magento (architecture, folder and data structure, configuration and naming). It provides you with a basic background of Magento to prepare for the next part. - Part 02. Module Development: This part has 14 lessons and focuses on many essential topics in Magento. They are module, menu, grid, form, layout and template, JavaScript and CSS, email, events and class override.",
      "pagecount": "Magento Made Easy - Comprehensive Guide to Magento Setup and Development is a free and easy to use Magento book. It gives you the fundamental background of Magento with two parts: Magento Overview and Magento Module Development. This e-book is the first volume with two parts: Magento Overview and Module Development. - Part 01. Magento Overview: The first part is an introduction to Magento (architecture, folder and data structure, configuration and naming). It provides you with a basic background of Magento to prepare for the next part. - Part 02. Module Development: This part has 14 lessons and focuses on many essential topics in Magento. They are module, menu, grid, form, layout and template, JavaScript and CSS, email, events and class override.",
      "imagelink": "http://books.google.com/books/content?id=J1_QBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "en",
      "price": {
        "amount": 0,
        "currencyCode": "ARS"
      }
    },
    {
      "id": "-7-gAwAAQBAJ",
      "title": "Google Search Secrets",
      "description": "Google can be an incredibly powerful tool for research, but the top-of-the-page results are seldom the most beneficial to library users and students, and many of the search engine’s most useful features are hidden behind its famously simple interface. Burns and Sauers reveal the secrets of effective Google searches in this invaluable resource showing how to get the most out of the service, with An overview of all the tool’s search services, including Image, Maps, News, Blogs, Discussions, Scholar, Patents, and Books Ready-to-use instructions on how to go beyond the simple search box and top results to get library users the answers they need, fast Straightforward guidance on using filters to refine search results, with examples of common searches like images with Creative Commons licenses, news searches set for a date range or into an archive, and videos with closed captioning An explanation of the bibliography manager feature of Google Scholar, which allows students and researchers to build bibliographies with ease Tips for configuring Safe Search on workstations in children’s departments and schools Copious screenshots walk readers through each topic step by step, making this a true how-to guide for everyone who uses Google.",
      "pagecount": "Google can be an incredibly powerful tool for research, but the top-of-the-page results are seldom the most beneficial to library users and students, and many of the search engine’s most useful features are hidden behind its famously simple interface. Burns and Sauers reveal the secrets of effective Google searches in this invaluable resource showing how to get the most out of the service, with An overview of all the tool’s search services, including Image, Maps, News, Blogs, Discussions, Scholar, Patents, and Books Ready-to-use instructions on how to go beyond the simple search box and top results to get library users the answers they need, fast Straightforward guidance on using filters to refine search results, with examples of common searches like images with Creative Commons licenses, news searches set for a date range or into an archive, and videos with closed captioning An explanation of the bibliography manager feature of Google Scholar, which allows students and researchers to build bibliographies with ease Tips for configuring Safe Search on workstations in children’s departments and schools Copious screenshots walk readers through each topic step by step, making this a true how-to guide for everyone who uses Google.",
      "imagelink": "http://books.google.com/books/content?id=-7-gAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "en",
      "price": "Free Book"
    },
    {
      "id": "eFyeAwAAQBAJ",
      "title": "E-book Platforms for Libraries",
      "description": "E-book vendors continue to experiment: adjustments to business models, consolidation of content, and mergers with competitors mean constant change. What’s good for innovation can equal confusion when it comes to choosing an e-book platform for your library. Making a sound purchasing decision requires research and close consideration of trade-offs, and Roncevic’s new issue of Library Technology Reports will get you started. Based on surveys of e-book vendors with an established presence in academic, public, and/or K–12 library markets, this report includes Background and business model descriptions for 51 leading e-book vendors Four tables comparing content, technical specifications, functionality, and business models An at-a-glance overview of platforms, including vendor website URLs Bulleted checklists of factors to consider, and questions to ask vendors An examination of the blurring channels of publisher, aggregator, and distributor platforms, with advice to help you avoid content overlap",
      "pagecount": "E-book vendors continue to experiment: adjustments to business models, consolidation of content, and mergers with competitors mean constant change. What’s good for innovation can equal confusion when it comes to choosing an e-book platform for your library. Making a sound purchasing decision requires research and close consideration of trade-offs, and Roncevic’s new issue of Library Technology Reports will get you started. Based on surveys of e-book vendors with an established presence in academic, public, and/or K–12 library markets, this report includes Background and business model descriptions for 51 leading e-book vendors Four tables comparing content, technical specifications, functionality, and business models An at-a-glance overview of platforms, including vendor website URLs Bulleted checklists of factors to consider, and questions to ask vendors An examination of the blurring channels of publisher, aggregator, and distributor platforms, with advice to help you avoid content overlap",
      "imagelink": "http://books.google.com/books/content?id=eFyeAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "en",
      "price": "Free Book"
    },
    {
      "id": "HiVdEAAAQBAJ",
      "title": "No Filter",
      "description": "“A book about a rare life, profound love, profound grief, anxiety, self-assurance, empowerment, aging, loss, and joy. It is nuanced, complex, insightful, helpful, and constantly surprising.” —Ann Patchett, New York Times bestselling author of These Precious Days Writer and former model Paulina Porizkova pens a series of intimate, introspective, and enlightening essays about the complexities of womanhood at every age, pulling back the glossy magazine cover and writing from the heart. Born in Cold War Czechoslovakia, Paulina Porizkova rose to prominence as a model, appearing on her first Sports Illustrated Swimsuit Issue cover in 1984. As the face of Estée Lauder in 1989, she was one of the highest-paid models in the world. When she was cast in the music video for the song “Drive” by The Cars, it was love at first sight for her and frontman Ric Ocasek. He was forty at the time, and Porizkova was nineteen. The decades to come would bring marriage, motherhood, a budding writing career; and later sadness, loneliness, isolation, and eventually divorce. Following her ex-husband’s death—and the revelation of a deep betrayal—Porizkova stunned fans with her fierce vulnerability and disarming honesty as she let the whole world share in her experience of being a woman who must start over. This is a wise and compelling exploration of heartbreak, grief, beauty, aging, relationships, re-invention and finding your purpose. In these essays, Porizkova bares her soul and shares the lessons she’s learned—often the hard way. After a lifetime of being looked at, she is ready to be heard.",
      "pagecount": "“A book about a rare life, profound love, profound grief, anxiety, self-assurance, empowerment, aging, loss, and joy. It is nuanced, complex, insightful, helpful, and constantly surprising.” —Ann Patchett, New York Times bestselling author of These Precious Days Writer and former model Paulina Porizkova pens a series of intimate, introspective, and enlightening essays about the complexities of womanhood at every age, pulling back the glossy magazine cover and writing from the heart. Born in Cold War Czechoslovakia, Paulina Porizkova rose to prominence as a model, appearing on her first Sports Illustrated Swimsuit Issue cover in 1984. As the face of Estée Lauder in 1989, she was one of the highest-paid models in the world. When she was cast in the music video for the song “Drive” by The Cars, it was love at first sight for her and frontman Ric Ocasek. He was forty at the time, and Porizkova was nineteen. The decades to come would bring marriage, motherhood, a budding writing career; and later sadness, loneliness, isolation, and eventually divorce. Following her ex-husband’s death—and the revelation of a deep betrayal—Porizkova stunned fans with her fierce vulnerability and disarming honesty as she let the whole world share in her experience of being a woman who must start over. This is a wise and compelling exploration of heartbreak, grief, beauty, aging, relationships, re-invention and finding your purpose. In these essays, Porizkova bares her soul and shares the lessons she’s learned—often the hard way. After a lifetime of being looked at, she is ready to be heard.",
      "imagelink": "http://books.google.com/books/content?id=HiVdEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "en",
      "price": {
        "amount": 2878.99,
        "currencyCode": "ARS"
      }
    },
    {
      "id": "tDDb5zRoONwC",
      "title": "Unix Power Tools",
      "description": "With the growing popularity of Linux and the advent of Darwin, Unix has metamorphosed into something new and exciting. No longer perceived as a difficult operating system, more and more users are discovering the advantages of Unix for the first time. But whether you are a newcomer or a Unix power user, you'll find yourself thumbing through the goldmine of information in the new edition of Unix Power Tools to add to your store of knowledge. Want to try something new? Check this book first, and you're sure to find a tip or trick that will prevent you from learning things the hard way.The latest edition of this best-selling favorite is loaded with advice about almost every aspect of Unix, covering all the new technologies that users need to know. In addition to vital information on Linux, Darwin, and BSD, Unix Power Tools 3rd Edition now offers more coverage of bash, zsh, and other new shells, along with discussions about modern utilities and applications. Several sections focus on security and Internet access. And there is a new chapter on access to Unix from Windows, addressing the heterogeneous nature of systems today. You'll also find expanded coverage of software installation and packaging, as well as basic information on Perl and Python.Unix Power Tools 3rd Edition is a browser's book...like a magazine that you don't read from start to finish, but leaf through repeatedly until you realize that you've read it all. Bursting with cross-references, interesting sidebars explore syntax or point out other directions for exploration, including relevant technical details that might not be immediately apparent. The book includes articles abstracted from other O'Reilly books, new information that highlights program tricks and gotchas, tips posted to the Net over the years, and other accumulated wisdom.Affectionately referred to by readers as \"the\" Unix book, UNIX Power Tools provides access to information every Unix user is going to need to know. It will help you think creatively about UNIX, and will help you get to the point where you can analyze your own problems. Your own solutions won't be far behind.",
      "pagecount": "With the growing popularity of Linux and the advent of Darwin, Unix has metamorphosed into something new and exciting. No longer perceived as a difficult operating system, more and more users are discovering the advantages of Unix for the first time. But whether you are a newcomer or a Unix power user, you'll find yourself thumbing through the goldmine of information in the new edition of Unix Power Tools to add to your store of knowledge. Want to try something new? Check this book first, and you're sure to find a tip or trick that will prevent you from learning things the hard way.The latest edition of this best-selling favorite is loaded with advice about almost every aspect of Unix, covering all the new technologies that users need to know. In addition to vital information on Linux, Darwin, and BSD, Unix Power Tools 3rd Edition now offers more coverage of bash, zsh, and other new shells, along with discussions about modern utilities and applications. Several sections focus on security and Internet access. And there is a new chapter on access to Unix from Windows, addressing the heterogeneous nature of systems today. You'll also find expanded coverage of software installation and packaging, as well as basic information on Perl and Python.Unix Power Tools 3rd Edition is a browser's book...like a magazine that you don't read from start to finish, but leaf through repeatedly until you realize that you've read it all. Bursting with cross-references, interesting sidebars explore syntax or point out other directions for exploration, including relevant technical details that might not be immediately apparent. The book includes articles abstracted from other O'Reilly books, new information that highlights program tricks and gotchas, tips posted to the Net over the years, and other accumulated wisdom.Affectionately referred to by readers as \"the\" Unix book, UNIX Power Tools provides access to information every Unix user is going to need to know. It will help you think creatively about UNIX, and will help you get to the point where you can analyze your own problems. Your own solutions won't be far behind.",
      "imagelink": "http://books.google.com/books/content?id=tDDb5zRoONwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "en",
      "price": {
        "amount": 4520,
        "currencyCode": "ARS"
      }
    },
    {
      "id": "C9U6EAAAQBAJ",
      "title": "Abeloff. Oncología clínica",
      "description": "Presenta de manera muy completa y equilibrada entre ciencias básicas y perspectiva clínica los conocimientos más actuales en la especialidad. Pone especial énfasis en la biología del cáncer, anatomía patológica, diagnóstico, tratamiento, pronóstico, rehabilitación y prevención. Cada capítulo se abre con los puntos clave Tiene un fuerte contenido visual que lo distingue de los demás productos que están en el mercado. Explica al lector cómo seleccionar las pruebas diagnósticas más adecuadas. Muestra cómo se están aplicando en la práctica diaria las últimas investigaciones. Su práctico formato permite acceder al contenido más completo en cualquier momento y en cualquier lugar a través de ExpertConsult.",
      "pagecount": "Presenta de manera muy completa y equilibrada entre ciencias básicas y perspectiva clínica los conocimientos más actuales en la especialidad. Pone especial énfasis en la biología del cáncer, anatomía patológica, diagnóstico, tratamiento, pronóstico, rehabilitación y prevención. Cada capítulo se abre con los puntos clave Tiene un fuerte contenido visual que lo distingue de los demás productos que están en el mercado. Explica al lector cómo seleccionar las pruebas diagnósticas más adecuadas. Muestra cómo se están aplicando en la práctica diaria las últimas investigaciones. Su práctico formato permite acceder al contenido más completo en cualquier momento y en cualquier lugar a través de ExpertConsult.",
      "imagelink": "http://books.google.com/books/content?id=C9U6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "language": "es",
      "price": {
        "amount": 28298.25,
        "currencyCode": "ARS"
      }
    }
  ]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  })

  return (
    <>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {

          bookss && bookss.map(e => (
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height='auto'
                    image={e.imagelink}
                    alt="book"
                  />
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
                  {`$ ${e.price.amount} ${e.price.currencyCode}`}
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default Cards