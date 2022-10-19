
var linguaElecta = 'hispana';

for (let ludus in ludi) {
  document.getElementById('principalis').innerHTML += `<fieldset id="ludus-${ludus}"><legend>${ludi[ludus][0]}</legend><div class="descriptio"><img src="img/${ludi[ludus][1]}"/><div><p>${textus[linguaElecta][1][ludus]}</p><input type="button" value="Más información" onclick="window.open('${ludi[ludus][2]}')"></div></div></fieldset>`;
}

var titulus = document.title;
function motioTituli() {
  titulus = titulus.substring(1, titulus.length) + titulus.substring(0, 1);
  document.title = titulus;
  setTimeout("motioTituli()", 500);
}

async function textusLegere(archivum) {
  let petitum = await fetch(archivum);
  let catenaDatorum = await petitum.text();
  let data = JSON.parse(catenaDatorum);
  console.log(data['textus']);
  console.log(data);
  document.getElementById('initius').innerHTML = data['textus'][linguaElecta]['index']['initius'];
  document.getElementById('qui-sumus').innerHTML = data['textus'][linguaElecta]['index']['qui-sumus'];
  document.getElementById('communica-nos').innerHTML = data['textus'][linguaElecta]['index']['communica-nos'];
  document.getElementById('lingua').innerHTML = data['textus'][linguaElecta]['index']['lingua'];
  document.getElementById('ludi').innerHTML = data['textus'][linguaElecta]['sectiones']['ludi'];
}

textusLegere("./json/db.json");
