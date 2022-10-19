
var linguaElecta = 'hispana';

async function textusLegere(archivum) {
  let petitum = await fetch(archivum);
  let catenaDatorum = await petitum.text();
  let data = JSON.parse(catenaDatorum);
  console.log(data);
  return data;
}

function indexScribere(obiectum) {
  console.log(obiectum);
  document.getElementById('initius').innerHTML = obiectum['textus'][linguaElecta]['index']['initius'];
  document.getElementById('qui-sumus').innerHTML = obiectum['textus'][linguaElecta]['index']['qui-sumus'];
  document.getElementById('communica-nos').innerHTML = obiectum['textus'][linguaElecta]['index']['communica-nos'];
  document.getElementById('lingua').innerHTML = obiectum['textus'][linguaElecta]['index']['lingua'];
}

function paginaScribere(obiectum) {
  document.getElementById('ludi').innerHTML = obiectum['textus'][linguaElecta]['sectiones']['ludi'];
}

var obiectum = textusLegere("./json/db.json");
console.log(obiectum);
indexScribere(obiectum);
paginaScribere(obiectum);

for (let ludus in obiectum['ludi']) {
  document.getElementById('principalis').innerHTML += `<fieldset id="ludus-${ludus}"><legend>${obiectum['ludi'][ludus]['nomen']}</legend><div class="descriptio"><img src="img/${obiectum['ludi'][ludus]['imago']}"/><div><p>${obiectum['ludi'][ludus]['descriptio'][linguaElecta]}</p><input type="button" value="Más información" onclick="window.open('${obiectum['ludi'][ludus]['vinculum']}')"></div></div></fieldset>`;
}

var titulus = document.title;
function motioTituli() {
  titulus = titulus.substring(1, titulus.length) + titulus.substring(0, 1);
  document.title = titulus;
  setTimeout("motioTituli()", 500);
}
