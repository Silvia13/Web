var Trabajos =[{
  Tittle: 'Plataformas',
  Description:'Este nivel está inspirado en la técnica que utiliza Nintendo en los juegos de Mario para crear sus niveles, la técnica Kishoutenketsu. Pensado para ser un primer nivel donde se le enseña al jugador las mecánicas básicas a modo de nivel tutorial, mostrando al jugador, gracias a la técnica, de manera orgánica mientras controlas el pacing.',
  Imagen_1: "../Imagenes/Plataformas/Plat_1.gif",
  Imagen_2: "../Imagenes/Plataformas/Plat_2.gif",
  Imagen_3: "../Imagenes/Plataformas/Plat_3.gif",
  Imagen_4: "../Imagenes/Plataformas/Plat_4.gif",
},

{
  Tittle: 'Color Spectrum',
  Description:'Lanzado en Itchio totalmente gratis. Se trata de un juego que basa su mecánica principal en el cambio de color, tanto para matar a los enemigos de diferente color, como para traspasar obstáculos del mismo. Consta de diversos niveles, una tienda y un sistema de customización para que el jugador pueda equiparse a su gusto.',
  Imagen_1: "../Imagenes/ColorSpectrum/Color_1.png",
  Imagen_2: "../Imagenes/ColorSpectrum/Color_2.png",
  Imagen_3: "../Imagenes/ColorSpectrum/Color_3.png",
  Imagen_4: "../Imagenes/ColorSpectrum/Color_4.gif",
},

{
  Tittle: 'Monkey Jump',
  Description:'Un juego de plataformas que juega con la variedad de las mismas y la presencia de una cámara móvil que te pisa continuamente los talones. Debes controlar al mono e ir saltando hábilmente de plataforma en plataforma escogiendo el camino más eficiente y teniendo cuidado de no caerte, puesto que eso supondrá la muerte. Podemos encontrar en el camino diferentes tipos de plataformas, de hielo resbaladizo, de ramas endebles que se caen al pisarla, lianas por las que podremos trepar, nubes que te catapultan hasta el cielo y muchas más.',
  Imagen_1: "../Imagenes/Mono/Gameplay.gif",
  Imagen_2: "../Imagenes/Mono/Menu.png",
  Imagen_3: "../Imagenes/Mono/Gameplay_3.png",
  Imagen_4: "../Imagenes/Mono/End.png",
},

{
  Tittle: 'Uzi',
  Description:'Representación de un modelo de Uzi totalmente texturizado. Para llevar a cabo este proceso, comencé haciendo un modelo en low del arma y sacando sus uvs en 3dsMax. Después pasé el modelo de low a high e imprimí las normales en el primero con MudBox. Por último con la ayuda de las uvs texturicé todo el arma con Quixel.',
  Imagen_1: "../Imagenes/Arma/Gun_1.png",
  Imagen_2: "../Imagenes/Arma/Gun_2.png",
  Imagen_3: "../Imagenes/Arma/Gun_3.png",
  Imagen_4: "../Imagenes/Arma/Gun_4.png",
},
];

var algo = document.querySelector(".Info");

function Work(numero){

  var Trabajo = Trabajos[numero];

  algo.innerHTML = `
      <h2>${Trabajo.Tittle}</h2>
      <div class="Informacion">
        <p>Descripción</p>
        <p>${Trabajo.Description}</p>
      </div>
      <figure>
        <img class="Img_1" src=${Trabajo.Imagen_1} alt="">
      </figure>
      <figure>
        <img class="Img_2" src=${Trabajo.Imagen_2} alt="">
      </figure>
      <figure>
        <img class="Img_3" src=${Trabajo.Imagen_3} alt="">
      </figure>
      <figure>
        <img class="Img_4" src=${Trabajo.Imagen_4} alt="">
      </figure>`;
}

// PLATAFORMA

var Plat = document.querySelector(".Mario");
Plat.addEventListener("click",onClickMario);

function onClickMario(e){
  e.preventDefault();
  Work(0);
}

// COLOR SPECTRUM

var Color = document.querySelector(".Colorines");
Color.addEventListener("click",onClickColorines);

function onClickColorines(e){
  e.preventDefault();
  Work(1);
}

// MONKEY

var Simio = document.querySelector(".Mono");
Simio.addEventListener("click",onClickMono);

function onClickMono(e){
  e.preventDefault();
  Work(2);
}

// ARMA

var Arma = document.querySelector(".Gun");
Arma.addEventListener("click",onClickGun);

function onClickGun(e){
  e.preventDefault();
  Work(3);
}
