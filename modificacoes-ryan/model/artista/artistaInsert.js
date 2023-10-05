const Artista = require("../artista/artistaModel");
const conectar_bd = require("../../service/mongo_connect")

conectar_bd()


// inserindo os artistas no schema

const vanGogh = new Artista({
    nomeArtista : "Vincent van Gogh",
    index : "vangogh",
    fotoArtista : "https://pt.wikipedia.org/wiki/Vincent_van_Gogh#/media/Ficheiro:Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_(454045).jpg"
})

const PaulCezanne = new Artista({
    nomeArtista : "Paul Cézanne",
    index : "paulcezanne",
    fotoArtista : "https://pt.wikipedia.org/wiki/Paul_C%C3%A9zanne#/media/Ficheiro:Paul-Cezanne.jpg"
})


const CamillePissarro = new Artista({
    nomeArtista : "Camille Pissarro",
    index : "camillepissarro",
    fotoArtista : "https://pt.wikipedia.org/wiki/Camille_Pissarro#/media/Ficheiro:Camille_Pissarro_040.jpg"
})

// salvando no mongo
vanGogh.save()
.then((vanGogh) => console.log("salvo com sucesso" + vanGogh))
.catch((error) => console.log(error))

PaulCezanne.save()
.then((PaulCezanne) => console.log("salvo com sucesso" + PaulCezanne))
.catch((error) => console.log(error))

CamillePissarro.save()
.then((CamillePissarro) => console.log("salvo com sucesso" + CamillePissarro))
.catch((error) => console.log(error))