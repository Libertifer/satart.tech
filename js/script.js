var linguaElecta = 'hispana';

async function textusLegere(archivum) {
  let petitum = await fetch(archivum);
  let catenaDatorum = await petitum.text();
  let data = await JSON.parse(catenaDatorum);
  console.log(data);
  indexScribere(data);
  paginaScribere(data);
}

function indexScribere(obiectum) {
  console.log(obiectum);
  document.getElementById('initius').innerHTML = obiectum['textus'][linguaElecta]['index']['initius'];
  document.getElementById('qui-sumus').innerHTML = obiectum['textus'][linguaElecta]['index']['qui-sumus'];
  document.getElementById('communica-nos').innerHTML = obiectum['textus'][linguaElecta]['index']['communica-nos'];
  document.getElementById('lingua').innerHTML = obiectum['textus'][linguaElecta]['index']['lingua'];
  linguaeIndicare(obiectum);
}

function linguaeIndicare() {
   for (let lingua in obiectum['textus']['linguae']) {
    document.getElementById('linguae').innerHTML += `<li onclick="linguaElecta = '${lingua}'">${obiectum['textus']['linguae'][lingua]}</li>`;
  }
}

function paginaScribere(obiectum) {
  document.getElementById('ludi').innerHTML = `<h1 class="text-2x1 font-bold">${obiectum['textus'][linguaElecta]['sectiones']['ludi']}</h1>`;
  for (let ludus in obiectum['ludi']) {
    document.getElementById('principalis').innerHTML += `<fieldset id="ludus-${ludus}"><legend>${obiectum['ludi'][ludus]['nomen']}</legend><div class="descriptio"><img src="img/${obiectum['ludi'][ludus]['imago']}"/><div><p>${obiectum['ludi'][ludus]['descriptio'][linguaElecta]}</p><input type="button" value="Más información" onclick="window.open('${obiectum['ludi'][ludus]['vinculum']}')"></div></div></fieldset>`;
  }
}

textusLegere("./json/db.json");

var titulus = document.title;
function motioTituli() {
  titulus = titulus.substring(1, titulus.length) + titulus.substring(0, 1);
  document.title = titulus;
  setTimeout("motioTituli()", 500);
}
