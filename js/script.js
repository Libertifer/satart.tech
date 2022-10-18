var textus = {
  'hispana': [
    [
      'INICIO',
      'QUIÉNES SOMOS',
      'CONTACTO',
      'IDIOMA',
      'Juegos'
    ],[
      '¿Alguna vez has jugado a juegos Tower Defense? En plan ¿que debes construir torres para detener a un ejército maligno que quiere destruir tu base? Pues, ahora tú vas a construir las torres para ayudar al ejército maligno (o bueno, ya que están de tu lado) a destruir la base.'
    ],[
      'Desarrollador web en stack LAMP, con manejo de frameworks como Bootstrap, Tailwind, React y Vue.js.',
      'Diseñador gráfico de sprites y backgrounds en Paint Tool SAI y Aseprite.'
    ]
  ],
  'anglica': [
    [
      'HOME',
      'ABOUT US',
      'CONTACT',
      'LANGUAGE',
      'Games'
    ],[
      'Have you ever played Tower Defense games? Like you gotta build towers to stop some evil army from destroying your base? Well, now you will build the towers to help the evil (or good, since they\'re on your side) army to destroy the base.'
    ],[
      'LAMP web developer, skilled with frameworks like Bootstrap, Tailwind, React and Vue.js.',
      'Graphic designer of sprites and backgrounds with Paint Tool SAI and Aseprite.'
    ]
  ]
};

var linguae = [
  'ESPAÑOL',
  'ENGLISH'
]

var comites = [
  'Libertifer',
  'Ahkin Arts'
]

var ludi = [
  ['Nokia Tower Offense','NokiaTO.png','https://libertifer.itch.io/nokia-tower-offense']
]

var linguaElecta = 'hispana';

//document.getElementById('initius').innerHTML = textus[linguaElecta][0][0];
document.getElementById('qui-sumus').innerHTML = textus[linguaElecta][0][1];
document.getElementById('contactare-nos').innerHTML = textus[linguaElecta][0][2];
document.getElementById('lingua').innerHTML = textus[linguaElecta][0][3];
document.getElementById('ludi').innerHTML = `<h2 class="text-2xl font-bold">${textus[linguaElecta][0][4]}</h2>`;

for (let ludus in ludi) {
  document.getElementById('principalis').innerHTML += `<fieldset id="ludus-${ludus}"><legend>${ludi[ludus][0]}</legend><div class="descriptio"><img src="img/${ludi[ludus][1]}"/><div><p>${textus[linguaElecta][1][ludus]}</p><input type="button" value="Más información" onclick="window.open('${ludi[ludus][2]}')"></div></div></fieldset>`;
}

var titulus = document.title;
function motioTituli() {
  titulus = titulus.substring(1, titulus.length) + titulus.substring(0, 1);
  document.title = titulus;
  setTimeout("motioTituli()", 500);
}

fetch("./json/db.json")
.then(responsum => {
   return responsum.json();
})
.then(data => document.getElementById('initius').innerHTML = data['textus'][linguaElecta]['index']['initius']);
