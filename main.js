'use strict';

//Clase constructora 
class Album {
    constructor(imagen, id, nombre, lanzamiento, botonModal) {
        this.imagen = imagen,
            this.id = id,
            this.nombre = nombre,
            this.lanzamiento = lanzamiento,
            this.botonModal = botonModal
    }
}

//Instaciación - crear mis objetos
const album1 = new Album("twicetagram.webp", "twicetagram", "Twicetagram", "30 de octubre del 2017", "modalTwicetagram");
const album2 = new Album("yes-or-yes.webp", "yes-or-yes", "YES or YES", "5 de noviembre del 2018", "modalYes");
const album3 = new Album("feel-special.webp", "feel-special", "Feel Special", "23 de septiembre del 2019", "modalSpecial");
const album4 = new Album("more-and-more.webp", "more-and-more", "More & More", "1 de junio del 2020", "modalMore");
const album5 = new Album("eyes-wide-open.webp", "eyes-wide-open", "Eyes Wide Open", "26 de octubre del 2020", "modalEyes");
const album6 = new Album("perfect-world.webp", "perfect-world", "Perfect World", "28 de julio del 2021", "modalPerfect");
const album7 = new Album("formula-of-love.webp", "formula-of-love", "Formula of Love", "12 de noviembre del 2021", "modalFormula");
const album8 = new Album("between-1-and-2.webp", "between-1-and-2", "Between 1&2", "26 de agosto del 2022", "modalBetween");

//Creo array y cargo los objetos
let albumes = [album1, album2, album3, album4, album5, album6, album7, album8];
console.log(albumes);

//Capturo el elemento HTML en el que voy a mostrar las cards
let divContenedor = document.querySelector("#tarjetas-dinamicas");
console.log(divContenedor);

//Muestro las cards
for (let album of albumes) {

    let nuevoAlbum = document.createElement("div");
    nuevoAlbum.classList.add("col-12", "col-sm-6", "col-lg-4", "col-xl-3", "mb-4", "mt-2");

    nuevoAlbum.innerHTML =
        `
        <div class="card text-center m-auto border-0" style="width: 16rem; height: 470px;" id="${album.id}">
            <img src="assets/fotos/${album.imagen}" alt="${album.nombre}" class="card-img-top img-fluid">
            <div class="card-body">
                <h4 class="card-title pt-2">${album.nombre}</h4>
                <p class="card-text p-oscuro">Fecha de lanzamiento: ${album.lanzamiento}</p>
                <!--Button trigger modal-->
                <a href="#" class="btn btn-primary px-5 py-2 mt-3 border-0 rounded-pill" data-bs-toggle="modal" data-bs-target="#${album.botonModal}">Ver más</a>
            </div>
        </div>
    `

    divContenedor.appendChild(nuevoAlbum);
}