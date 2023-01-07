import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Detail(props) {

    const bookss = [
        {
            "id": "xQZMDwAAQBAJ",
            "title": "Servicio Técnico 11: Equipos all in one",
            "authors": "Javier Richarte",
            "description": "Estos 24 fascículos abarcan cada una de las distintas áreas del mantenimiento de computadoras: Hardware, armado de equipos, diagnóstico integral, reparación de componentes internos, de pantallas, de impresoras, de dispositivos portátiles (notebooks, netbooks, tablets y celulares) y redes. A través de guías visuales, explicaciones paso a paso, infografías y más recursos visuales, lectores y usuarios emprendedores podrán aprender con facilidad la delicada y compleja labor de diagnosticar, reparar y optimizar computadoras, dispositivos externos (como pantallas e impresoras, entre otros) y redes informáticas, tanto cableadas como inalámbricas. PLAN DE LA OBRA: 01: Componentes y armado de PC – 02: Fuentes de energía y gabinetes – 03: Motherboard: partes y funcionamiento – 04: Motherboard: conectores, zócalos y energía – 05: El BIOS – 06: Procesadores – 07: RAM – 08: Tarjetas gráficas y de audio – 09: Discos – 10: Monitores LCD y LED – 11: Equipos all in one – 12: Notebooks y netbooks – 13: Tablets y celulares – 14: Impresoras inkjet, láser y matriciales – 15: Sistema operativo: resolución de problemas – 16: Windows: instalación y configuración – 17: Optimización de la PC – 18: Hardware stressing – 19: Fundamentos de redes – 20: Redes Wi-Fi – 21: Redes Wi-Fi: optimización y seguridad – 22: Periféricos: teclado, mouse y parlantes – 23: Almacenamiento removible – 24: Mantenimiento preventivo y salida laboral",
            "category": "Computers",
            "pagecount": "24",
            "imagelink": "http://books.google.com/books/content?id=xQZMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "428.1",
            "createdAt": "2023-01-06T17:55:26.742Z",
            "updatedAt": "2023-01-06T17:55:26.742Z"
        },
        {
            "id": "C1u7DwAAQBAJ",
            "title": "Los All Blacks",
            "authors": "Peter Bills",
            "description": "La historia definitiva del mejor equipo de la historia del deporte como nunca antes nos la habían explicado. Incluye entrevistas con Richie McCaw, Steve Hansen, Bauden Barrett y Dan Carter.",
            "category": "Self-Help",
            "pagecount": "400",
            "imagelink": "http://books.google.com/books/content?id=C1u7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "Free Book",
            "createdAt": "2023-01-06T17:55:26.744Z",
            "updatedAt": "2023-01-06T17:55:26.744Z"
        },
        {
            "id": "3a_R6cC6n1kC",
            "title": "All about Temperature",
            "authors": "Alison Auch",
            "description": "\"Simple text and color photographs introduce temperature, including how thermometers work and the Celsius and Fahrenheit scales--in both English and Spanish\"--",
            "category": "Juvenile Nonfiction",
            "pagecount": "14",
            "imagelink": "http://books.google.com/books/content?id=3a_R6cC6n1kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "Free Book",
            "createdAt": "2023-01-06T17:55:26.747Z",
            "updatedAt": "2023-01-06T17:55:26.747Z"
        },
        {
            "id": "6Bw6DwAAQBAJ",
            "title": "All Blacks (Flash Ensayo)",
            "authors": "Fermín de la Calle",
            "description": "Un trepidante repaso por la historia de los All Blacks, el mejor equipo de todos los tiempos. Los All Blacks no aspiran a ganar a sus rivales, ni siquiera a ganar el mundial y ser el mejor equipo de rugby del planeta. Su objetivo es ser el mejor equipo del mundo, por encima de cualquier otro equipo sea cual sea su disciplina deportiva. Con esta mentalidad, los All Blacks se han convertido en leyenda, y Fermín de la Calle nos ofrece un exhaustivo repaso de la trayectoria de uno de los mayores mitos de la historia del deporte. Más allá de los hakas con los que amedrentan a sus rivales antes del inicio de cada encuentro y sus tácticas y mentalidad demoledoras, los All Blacks se han convertido en un ejemplo a seguir para cualquier equipo, sea cual sea el deporte que practique. Será difícil que tras leer este Flash no te conviertas en fan absoluto de los All Blacks.",
            "category": "Sports & Recreation",
            "pagecount": "30",
            "imagelink": "http://books.google.com/books/content?id=6Bw6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "296.99",
            "createdAt": "2023-01-06T17:55:26.747Z",
            "updatedAt": "2023-01-06T17:55:26.747Z"
        },
        {
            "id": "DSIzDwAAQBAJ",
            "title": "Fania All-Stars: Salsa, Inc.",
            "authors": "Tommy Muriel ",
            "description": "Desde hace poco más de 50 años, la música afrocaribeña se conoce (¡y se baila!) en los Estados Unidos, el Caribe, Centro y Sur América y buena parte del mundo bajo un nombre tan inclusivo como controversial: SALSA. Este libro narra con detalles la historia de dos de las fuerzas principales detrás de este fenómeno. Por un lado, la FANIA ALL-STARS o Estrellas de Fania, el conglomerado de artistas que llevó la bandera salsera a través del mundo y los protagonistas principales de esta historia. Por el otro lado, Fania Records, el sello discográfico fundado por Jerry Masucci en 1964 que patentizó el género a lo largo de las siguientes dos décadas y que dio a conocer a muchos de sus más grandes nombres. Celia Cruz * Johnny Pacheco * Tito Puente * Ray Barretto * Mongo Santamaría * Eddie Palmieri * Willie Colón * Larry Harlow * Roberto Roena * Bobby Valentín * Joe Bataan * Ricardo Ray * Louie Ramírez * Nicky Marrero * Papo Lucca * Yomo Toro * Pupi Legarreta * Luis “Perico” Ortiz * Johnny Rodríguez * Barry Rogers * Orestes Vilató * Víctor Paz * Luis García * Cheo Feliciano * Ismael Rivera * Justo Betancourt * Bobby Cruz * Santos Colón * Héctor Lavoe * Ismael Miranda * Ismael Quintana * Rubén Blades * Pete “El Conde” Rodríguez * Adalberto Santiago * Chivirico Dávila * Monguito * Andy Montañez * Luigi Texidor * Héctor Casanova * Junior González * Jimmy Sabater * Cali Alemán * Juancito Torres * Reynaldo Jorge * Ray Maldonado * Bomberito Zarzuela * Lewis Kahn * Sal Cuevas * Eddie Montalvo * Nelson González * Oscar D’León * Leopoldo Pineda * Puchi Boulong * Domingo Quiñones * Wilfrido Vargas * Papo Vázquez * Alfredo De La Fe * Elías Lopés * Ed Byrne * Roberto Rodríguez * Larry Spencer * Lew Soloff * Jimmy Bosch * Isidro Infante * Ite Jerez * Jerry Medina * Tito Allen * Tito Nieves * Néstor Sánchez * Ray De La Paz * Aníbal Vázquez * Izzy Sanabria * Tite Curet Alonso ...son solo algunos de los nombres cuyas historias y música se entrelazan en este texto. Su visión, sus aciertos, sus fracasos y controversias y, sobre todo, su legado, con fotografías y discografía completa y actualizada, son plasmados en este libro por su autor Thomas \"Tommy\" Muriel, percusionista, escritor y antiguo colaborador de Fania Records entre 2006 y 2011.",
            "category": "Music",
            "pagecount": "340",
            "imagelink": "http://books.google.com/books/content?id=DSIzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "Free Book",
            "createdAt": "2023-01-06T17:55:26.747Z",
            "updatedAt": "2023-01-06T17:55:26.747Z"
        },
        {
            "id": "8eWUDLk_WhUC",
            "title": "So That All Shall Know/Para que todos lo sepan",
            "authors": "Oscar Iván Maldonado",
            "description": "How does an artist respond to the horrors of war and the genocide of his or her people? Can art play a role in the fight for justice? These are key questions for understanding the work of Guatemalan photographer Daniel Hernández-Salazar. Since the 1980s, Hernández-Salazar has created both documentary and aesthetic works that confront the state-sponsored terrorism and mass killings of Guatemala's long civil war (1962-1996). His photographic polyptych (4-panel image) \"Clarification\" became the icon for the Recovery of Historical Memory project of the Archbishopric of Guatemala, as well as a rallying symbol for Guatemalans. Broadening his crusade for justice in the twenty-first century, Hernández-Salazar is now also using the shouting angel of his polyptych (entitled \"So That All Shall Know\") to challenge the forgetting and/or erasure of painful history in many parts of the world, including Mexico, Japan, the United States, Canada, and Argentina. So That All Shall Know is a powerful, comprehensive overview of the work of Daniel Hernández-Salazar on recent Guatemalan history. Portfolios of images present his early photojournalistic work documenting the Guatemalan genocide; his Eros + Thanatos series that responds aesthetically to the destruction of war; and his Street Angel project, which uses his image \"So That All Shall Know\" to protest against injustice and historical forgetting around the world. Accompanying the images are bilingual English-Spanish essays by four scholars who discuss the development of Hernández-Salazar's art in the context of contemporary photography, the social and political conditions that inspire his work, and the broader questions that arise when artists engage in social struggle. Introduced by Nobel Peace Laureate Rigoberta Menchú Tum, So That All Shall Know is a moving testament to the horrors of genocide and the power of art to give voice to the silenced and presence to the disappeared.",
            "category": "Photography",
            "pagecount": "184",
            "imagelink": "http://books.google.com/books/content?id=8eWUDLk_WhUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "6764.29",
            "createdAt": "2023-01-06T17:55:26.748Z",
            "updatedAt": "2023-01-06T17:55:26.748Z"
        },
        {
            "id": "Gli4CgAAQBAJ",
            "title": "English from the base for all Spanish Speakers, Ingles para Hipanohablantes",
            "authors": "Tirso Jose Alecoy",
            "description": "Inglés para todo hispano hablante. Libro de texto y ejercicios en nivel básico y medio bajo que explica paso a paso en español, las estructuras gramaticales y la pronunciación del idioma inglés. En el libro se explican con esmero y detalle desde el elemento mas básico de la gramática del inglés hasta la construcción de oraciones complejas. El método se caracteriza por la forma innovadora de enseñar idiomas que consiste en tres etapas. Primero, se explica en castellano cada elemento de una oración, luego se muestran varios ejemplos sobre ese tema, finalmente se invita al alumno a practicar lo que aprendió en ese párrafo, ejercitando la materia que éste aprendió. De ese modo, el alumno se entera de la mayor parte de las reglas gramaticales para luego reproducir los mismos en las formas y posiciones correctas. El método de aprendizaje se orienta a la idea de que la lógica humana puede aprender un idioma realizando 4 etapas: entendiendo, absorbiendo, reproduciendo y repitiendo. Para el aprendizaje de un idioma extranjero, la repetición es de suma importancia, puesto que solo de esa forma quedan grabadas en la memoria, el vocabulario, la pronunciación, los acentos y la gramática.",
            "category": "Study Aids",
            "pagecount": "118",
            "imagelink": "http://books.google.com/books/content?id=Gli4CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "Free Book",
            "createdAt": "2023-01-06T17:55:26.748Z",
            "updatedAt": "2023-01-06T17:55:26.748Z"
        },
        {
            "id": "6GdV6MG83fgC",
            "title": "Breue, et vniuersale cronistoria del mondo creato sino all'anno di salute 1668. Col giusto numero degl'anni di esso dalla Sacra Scrittura ritratti, e calcolati sino a Christo",
            "authors": "Timoteo de Termine (O.C.)",
            "description": "no description",
            "category": "no category",
            "pagecount": "560",
            "imagelink": "http://books.google.com/books/content?id=6GdV6MG83fgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "Free Book",
            "createdAt": "2023-01-06T17:55:26.748Z",
            "updatedAt": "2023-01-06T17:55:26.748Z"
        },
        {
            "id": "RAcv5klJ1_MC",
            "title": "Nos Divertimos/On All Kinds of Days",
            "authors": "Susan Ring",
            "description": "\"Simple text and photos present the seasonal weather cycle and activities to do in each season\"--Provided by publisher.",
            "category": "Juvenile Nonfiction",
            "pagecount": "24",
            "imagelink": "http://books.google.com/books/content?id=RAcv5klJ1_MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "Free Book",
            "createdAt": "2023-01-06T17:55:26.749Z",
            "updatedAt": "2023-01-06T17:55:26.749Z"
        },
        {
            "id": "KGwPDc1ETikC",
            "title": "Cuban, That's All! - An Exile In Three Acts - Candid Voices of a Spanglish Existence",
            "authors": "Juan Hernandez",
            "description": "The original series of monologues detailing the Cuban repatriation experience from post revolution 1959 Cuba through today. Laugh, cry and relive all of the key turningpoints in the lives of Cuban exiles amid backdrops of historical events, life milestones and simple everyday situations. In Spanish, English and Spanglish. Monologues include: Shoebox Child, Operacion Pedro Pan, Los Quinces, El Interviu, Mayflower Mary and many more.",
            "category": "Cuban Americans",
            "pagecount": "174",
            "imagelink": "http://books.google.com/books/content?id=KGwPDc1ETikC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "language": "es",
            "price": "Free Book",
            "createdAt": "2023-01-06T17:55:26.749Z",
            "updatedAt": "2023-01-06T17:55:26.749Z"
        }
    ]

    const id = props.match.params.id

    let bookID = bookss.filter(e => id === e.id)

    console.log(id)
    console.log(bookID)


    return (
        <>
            {
                bookID && bookID.map(e => (
                    <>

                        <Card sx={{ minWidth: 275 }}>
                            <img src={e.imagelink} alt="" height='400px' />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {e.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    AUTOR
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                {e.authors}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    SINOPSIS
                                </Typography>
                                <Typography variant="body2">
                                    {e.description}
                                    <br />
                                    <br />
                                    Language:
                                    <br />
                                    {e.language}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><ShoppingCartIcon/></Button>
                            </CardActions>
                        </Card>
                    </>
                ))
            }

        </>
    )
}