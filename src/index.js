//Archivo que va a comunicar, es el indice que va a permitir acceder a todas las paginas
// Es un modulo. Objeto

const homePage =require ('./homePage');
const enCartelera = require ('./enCartelera');
const masVotadas = require ('./masVotadas');
const sucursales = require ('./sucursales');
const contacto = require ('./contacto');
const preguntasFrecuentes = require ('./preguntasFrecuentes');
const { titulo } = require('./homePage');


let index = {
    homePage:function(res){
       //titulo
        res.write(homePage.titulo)
        //cantidad de peliculas
        res.write(`\n Total de pelicula: ${enCartelera.cantidad()}\n\n`);
        //TITULO DE PELICULA
        let movies = homePage.listarPeliculas();
        for(movie of movies){
            res.write(movie);
            res.write(' \n')
        }
        res.write('\n\n Recorda que podes volver vistar las secciones: \n\n')
        res.write('i. En Cartelera\n')
        res.write('ii. Mas Votadas')
        res.write('iii. Sucursales')
        res.write('iv. contacto')
        res.write ('v.Preguntas Frecuetes')
       res.end()
    },
    enCartelera:function(res){
        res.write(enCartelera.titulo)
        res.write(`\n total de pelicula ' ${enCartelera.cantidad()}`),
        res.write('Listado de peliculas')
        let movies = enCartelera.listarPelis()
        movies.forEach(function(movie){
            res.write(`\n`)
            res.write(movie.title);
            res.write(`\n`)
            res.write('Reseña ' + movie.overview);
        
        })
        res.end()
    },
    masVotadas:function(res){
        res.write(masVotadas.titulo)
        res.write('\n')
        res.write('Total de votadas: ' + masVotadas.cantidad())
        res.write('\n')
        res.write('Listado de peliculas')
        res.write(`Rating Promedio: ${masVotadas.promedio()}`)
        res.write('\n')
        res.write("Listado de peliculas")
        let movies=masVotadas.listarPelis();
        movies.forEach(function(movie){
            res.write(`${movie.title}Rating: ${movie.vote_average}`);
            res.write(movie.overview)
        })
    res.end()
    
    },
    sucursales: function(res) {
        res.write(sucursales.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + sucursales.cantidad())
        res.write('\n\n')
        res.write('Listado de Salas disponibles\n' + sucursales.toUpperCase)
        res.write('\n\n')
        let theaters = sucursales.listarCines();
        theaters.forEach(function(theater) {
            res.write('\n')
            res.write(`Nombre:  ${ theater.name}`)
            res.write('\n')
            res.write(`Direccion:  ${ theater.address}`)
            res.write('\n\n')
            res.write(`Descripcion:  ${ theater.description}`)
            res.write('\n')
        })
        res.end()
    },
    contacto:function(res){
        

    },
    preguntasFrecuentes:function(res){
        res.write(`Titulo: ${preguntasFrecuentes.titulo}`);
        res.write(`\n`)
        res.write(`Total: ${preguntasFrecuentes.cantidad()}`);
        res.write(`\n\n`)
        let faqs= preguntasFrecuentes.listarFaqs() ;
        for (faq of faqs){
            res.write(`\n\n`)
            res.write(`Preguntas: ${faq.faq_title}`);
            res.write(`\n\n`)
            res.write(`Respuestas: ${faq.faq_answer}`)
        }
        res.end()
    },
}

module.exports = index