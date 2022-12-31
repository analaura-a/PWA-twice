'use strict';

/*CARDS DINÁMICAS*/
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


/*VENTANAS MODALES DINÁMICAS*/
//Clase constructora 
class Modal {
    constructor(id, label, nombre, contenido, iframe) {
        this.id = id,
            this.label = label,
            this.nombre = nombre,
            this.contenido = contenido,
            this.iframe = iframe
    }
}

//Instaciación - crear mis objetos
const modal1 = new Modal("modalTwicetagram", "modalTwicetagramLabel", "Twicetagram", `<b class="negrita">Twicetagram</b> es el primer álbum de estudio de Twice. Fue lanzado el 30 de octubre de 2017 por JYP Entertainment y distribuido por Genie Music. El nombre Twicetagram es el mismo que el nombre de usuario de la cuenta de Instagram oficial de Twice que abrieron en julio de 2015. El álbum contiene trece pistas, incluyendo su sencillo principal titulado «<b class="negrita">Likey</b>»​​.`, "https://www.youtube.com/embed/bUrQbt1jR4A");
const modal2 = new Modal("modalYes", "modalYesLabel", "Yes or yes", `<b class="negrita">Yes or Yes</b> es el sexto EP del girl group surcoreano Twice. Fue lanzado el 5 de noviembre de 2018 por JYP Entertainment y distribuido por Iriver. ​El álbum contiene siete pistas, incluyendo su sencillo principal titulado «<b class="negrita">YES or YES</b>»​​.`, "https://www.youtube.com/embed/mAKsZ26SabQ");
const modal3 = new Modal("modalSpecial", "modalSpecialLabel", "Feel Special", `<b class="negrita">Feel Special</b> es el octavo EP del grupo femenino surcoreano Twice. Fue lanzado el 23 de septiembre de 2019 por JYP Entertainment junto con el videoclip de su sencillo principal titulado «<b class="negrita">Feel Special</b>». Consistiendo de siete canciones, incluye géneros desde EDM, hip hop y música de los '90s, todas las miembros de TWICE participaron como escritoras de canciones.`, "https://www.youtube.com/embed/WEiyz8rUuEQ");
const modal4 = new Modal("modalMore", "modalMoreLabel", "More & More", `<b class="negrita">More & More</b> es el noveno EP del grupo femenino surcoreano Twice. Fue lanzado junto con un videoclip titulado con el mismo nombre, el 1° de junio de 2020 por JYP Entertainment y distribuido por Dreamus Company Korea.​ ​El álbum en total contiene siete pistas, incluyendo su sencillo principal titulado «<b class="negrita">MORE & MORE</b>»​​.`, "https://www.youtube.com/embed/mH0_XpSHkZo");
const modal5 = new Modal("modalEyes", "modalEyesLabel", "Eyes Wide Open", `<b class="negrita">Eyes Wide Open</b> es el segundo álbum de estudio coreano del grupo femenino Twice y cuarto de su discografía general. Fue lanzado el 26 de octubre de 2020 por JYP Entertainment, incluyendo 13 pistas junto a su sencillo principal titulado «<b class="negrita">I Can't Stop Me</b>».​`, "https://www.youtube.com/embed/CM4CkVFmTds");
const modal6 = new Modal("modalPerfect", "modalPerfectLabel", "Perfect World", `<b class="negrita">Perfect World</b> es el tercer álbum de estudio japonés y quinto en general del grupo femenino de Corea del Sur Twice.​ El álbum fue lanzado el 28 de julio de 2021 y contiene los tres sencillos lanzados previamente, «<i>Fanfare</i>», «<i>Better</i>» y «<i>Kura Kura</i>», ​además del sencillo principal del álbum, la pista homónima «<b class="negrita">Perfect World</b>».`, "https://www.youtube.com/embed/fmOEKOjyDxU");
const modal7 = new Modal("modalFormula", "modalFormulaLabel", "Formula of Love", `<b class="negrita">Formula of Love</b>, estilizado como <i class="negrita">Formula of Love: O+T=&lt;3</i>, es el tercer álbum de estudio coreano del grupo femenino Twice y sexto de sus álbumes de estudio en general. Fue lanzado el 12 de noviembre de 2021 por JYP Entertainment. El álbum contiene 16 pistas, incluyendo su último sencillo en inglés titulado «<i>The Feels</i>», ​​ y la pista principal titulada «<b class="negrita">Scientist</b>».​​`, "https://www.youtube.com/embed/93rdzNWBMmo");
const modal8 = new Modal("modalBetween", "modalBetweenLabel", "Between 1&2",`​<b class="negrita">Between 1&2</b> es el undécimo y último EP lanzado por el grupo femenino surcoreano Twice. Se publicó el 26 de agosto de 2022 por JYP Entertainment y fue distribuido por Dreamus. El álbum contiene siete pistas, incluyendo su sencillo principal titulado «<b class="negrita">Talk That Talk</b>».`, "https://www.youtube.com/embed/k6jqx9kZgPM");

//Creo array y cargo los objetos
let modales = [modal1, modal2, modal3, modal4, modal5, modal6, modal7, modal8];

//Capturo el elemento HTML en el que voy a mostrar las ventanas modales
let divModal = document.querySelector("#modal-dinamico");

//Muestro las ventanas modales
for (let modal of modales) {

    let nuevoModal = document.createElement("div");
    nuevoModal.innerHTML =
        `
        <div class="modal fade" id="${modal.id}" tabindex="-1" aria-labelledby="${modal.label}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">

                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${modal.label}">${modal.nombre}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <p class="p-oscuro">
                            Acerca de
                        </p>
                        <p class="p-oscuro mb-4">${modal.contenido}</p>
                        <p class="p-oscuro">
                            Escúchalo aquí:
                        </p>
                        <iframe width="100%" height="315" src="${modal.iframe}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary px-4 py-2 mt-3 border-0 rounded-pill"
                            data-bs-dismiss="modal">Cerrar</button>
                    </div>

                </div>
            </div>
        </div>
        `

    divModal.appendChild(nuevoModal);
}