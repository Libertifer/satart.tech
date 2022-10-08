var textus = {
  'hispanus': [
    'Inicio',
    'Quiénes Somos',
    'Contacto',
    'Idioma',
  ],
  'anglicus': [
    'Home',
    'About us',
    'Contact',
    'Language'
  ]
};

var linguae = [
  'Español',
  'English'
]

document.getElementById('initius').innerHTML = textus['hispanus'][0];
document.getElementById('qui-sumus').innerHTML = textus['hispanus'][1];
document.getElementById('contactare-nos').innerHTML = textus['hispanus'][2];
document.getElementById('lingua').innerHTML = textus['hispanus'][3];

function motioTituli() {
  titulus = titulus.substring(1, titulus.length) + titulus.substring(0, 1);
  document.title = titulus;
  setTimeout("motioTituli()", 60);
}
