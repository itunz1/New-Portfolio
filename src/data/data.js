import project1 from '../images/carsmarket.gif';
import project2 from '../images/pokemon.gif';
import project3 from "../images/omnifood.png";
import project4 from '../images/bankWeb.png';
import project5 from '../images/twitterClone.png';
import project6 from '../images/campweb.png';
import project7 from '../images/videogames.png';
import project8 from '../images/got.png';
import project9 from '../images/memory1.png';
import project10 from '../images/postit1.png'


export const cardData = [
    {
        id: "project1",
        title: "CarsMarket",
        tech: "#React-Redux #PostgreSQL",
        img: project1,
        content: `This is a well made Ecommerce with a team of 5 colleague where you can post, buy or sell
        any vehicle. I worked in the front doing the section where you can see all the details of any post made
        by any user, in this section if you are registered you can add/remove the article to favorites, leave 
        comments and reviews, if you decide to buy the article you are redirected to 
        fill a form to contact the seller and you will receive an email with all the instructions, also you 
        can see the seller reputation from 0 to 5 stars. In colaboration with the team in the back to make sure 
        that all the data is working correctly, i made the form to post your vehicle implementing all the 
        validations needed.`,
        contentEsp: `Esto es un Ecommerce muy bien realizado con un equipo de 5 compañeros en donde puedes postear, 
        comprar o vender cualquier vehiculo. Trabaje en el front haciendo la seccion donde puedes ver todos los detalles
        de cualquier post de cualquier usuario, en esta seccion si estas registrado podras añadir/remover el post de favoritos
        agregar comentarios y reseñas, si decides comprar algun articulo publicado seras redireccionado a llenar un formulario
        para contactar con el vendedor y reciviras un email con todas las intrucciones, adicionalmente puedes ver la reputacion
        del vendedor de 0 a 5 estrellas. En colaboracion con el team del backend me asegure de que toda la informacion trabajara
        de forma correcta, hice el formulario para postear tu vehiculo con todas las validaciones necesarias`,
        code: "https://github.com/itunz1/carsmarket",
        site: "https://carsmarket.vercel.app/",
    },
    {
        id: "proyect2",
        title: "Pokemon App",
        tech: "#React-Redux #PostgreSQL",
        img: project2,
        content: `I made this proyect individually where you can find your favorite pokemon
        by fetching data from a public API storing the data into a database, added some features
        like a search bar, some filters and a form to create your personal pokemon`,
        contentEsp: `Primera app realizada en un bootcamp donde puedes buscar cualquier pokemon filtados
        por nombre, tipo, ataque, también puedes crear tu propio pokemon para el backend
        utilice PostgresSQL y AWS para el deploy y para el front JS, React, Redux, CSS puro`,
        code: "https://github.com/itunz1/PokemonPI",
        site: ""
    },
    {
        id: "proyect3",
        title: "Omnifood",
        tech: "#HTML #CSS",
        img: project3,
        content: `This is a full responsive website for client exhibition using UI/UX principies, aplaying pure
        HTML/CSS and querys.`,
        contentEsp: `Realice esta pagina web de exhibición sobre una compañía ficticia dedicada a la venta de
        comida saludable utilizando HTML y CSS puro.`,
        code: "https://github.com/itunz1/Omnifood-project",
        site: "https://omnii-foood.netlify.app/",
    },
    {
        id: "proyect4",
        title: "Moderm Website",
        tech: "#React",
        img: project4,
        content: `This is a full responsive website for client exhibition using UI/UX principies.`,
        contentEsp: "Esta es una website responsiva para exhibicion usando los principios de UI/UX",
        code: "https://github.com/itunz1/Moderm-Website",
        site: "https://6564e79bc0e55f13d713f94c--timely-pika-71bdbf.netlify.app/"
    },
    {
        id: "proyect5",
        title: "Twitter Clone",
        tech: "#NextJs #Firebase",
        img: project5,
        content: `This is a personal projector where I used my skills to recreate the popular Twitter application currently X. Using Nextjs as the basis of the project, Tailwind CSS for design and Firebase as a database, adding google authenticator to login and get access to the website features.`,
        contentEsp: "Este es un proyector personal en donde utilice mis habilidades para recrear la popular aplicacion de twitter actualmente X. Utilizando Nextjs como base del proyecto, Tailwind Css para añadir diseño y Firebase como base de datos además de integrar el autenticador de Google para ingresar a la pagina.",
        code: "https://github.com/itunz1/Twitter-Clone",
    },
    {
        id: "proyect6",
        title: "Camp website",
        tech: "#NextJs",
        img: project6,
        content: `This is a full responsive website for client exhibition using UI/UX principies.`,
        contentEsp: "Esta es una website responsiva para exhibicion usando los principios de UI/UX",
        code: "https://github.com/itunz1/Camp-website",
        site: "https://6564e9a2ba01d117ce17b246--harmonious-hummingbird-9e75e2.netlify.app/"
    },
]


export const extras = [
    {
        id: 'yellow',
        title: 'Videogames App',
        img: project7,
        description: 'This application allows you to search information about video games availables in an public API',
        descriptionEsp: 'Aplicacion donde puedes buscar informacion sobre video juegos disponibles en una API publica',
        tech: '#React-Redux',
        code: 'https://github.com/itunz1/VideoGames',
        site: 'https://657f539fc7a0a529a2939f9f--dancing-florentine-f45c8b.netlify.app/',
    },
    {
        id: 'green',
        title: 'Memory Card Game',
        img: project9,
        description: 'Fun memory game made with pets images using JQuery and JavaScript',
        descriptionEsp: 'Divertido juego de memoria con imagenes de animales realizado con JavaScript',
        tech: '#JavaScript #HTML #CSS',
        code: 'https://github.com/itunz1/Memory-card-game',
        site: 'https://memory-gamess.netlify.app/',
    },
    {
        id: 'blue',
        title: 'Postit App',
        img: project10,
        description: 'This application allows you to post a comment or leave a comment into another users post',
        descriptionEsp: 'Una aplicacion donde puedes postear comentarios o responder comentarios de otros usuarios',
        tech: '#NextJs #Firebase',
        code: 'https://github.com/itunz1/Post-Comment-proytect',
        site: 'https://postsz-comments.netlify.app',
    },
    {
        id: 'violet',
        title: 'Game of Thrones App',
        img: project8,
        description: 'Application to learn about the characters of the famous series The Game of Thrones and their most shocking phrases in the series.',
        descriptionEsp: 'Aplicacion para conocer a los personajes de la famosa serie de The Game of Thrones y sus frases mas celebres en la serie',
        tech: '#React',
        code: 'https://github.com/itunz1/Game-of-thrones-App',
        site: 'https://gleaming-brigadeiros-e2d8e4.netlify.app/',
    },
]

