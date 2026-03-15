////////////////////////////////////////////////////
// POPUP COM PERGUNTAS
////////////////////////////////////////////////////

function abrirQuestionario(layer, nome){

let html = `
<div style="width:260px">

<b>${nome}</b>
<hr>

<label>Essa igreja tem homilia que ensina a fé ortodoxa católica?</label><br>

<input type="radio" name="homilia_${nome}" value="sim"> Sim
<input type="radio" name="homilia_${nome}" value="nao"> Não

<br><br>

<label>Os cantos são litúrgicos e não são acompanhados por bateria, guitarras ou instrumentos anti-litúrgicos?</label><br>

<input type="radio" name="cantos_${nome}" value="sim"> Sim
<input type="radio" name="cantos_${nome}" value="nao"> Não

<br><br>

<button onclick="enviarResposta('${nome}')">
Salvar
</button>

</div>
`;

layer.bindPopup(html).openPopup();

}

////////////////////////////////////////////////////
// SALVAR RESPOSTAS
////////////////////////////////////////////////////

function enviarResposta(nome){

let homilia = document.querySelector(`input[name="homilia_${nome}"]:checked`);
let cantos = document.querySelector(`input[name="cantos_${nome}"]:checked`);

let dados = {
igreja:nome,
homilia: homilia ? homilia.value : null,
cantos: cantos ? cantos.value : null
};

console.log("Resposta enviada:",dados);

alert("Resposta salva!");

}
