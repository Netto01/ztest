// Lógica em JavaScript puro para calcular FK a partir de inputs HTML

// Espera-se que os elementos com os IDs abaixo existam no HTML
const fkInput = document.getElementById("fk");
const sexo = document.getElementById("sexo");
const escolaridade = document.getElementById("escolaridade");
const atividade = document.getElementById("atividade");
const tabela = document.getElementById("tabela");
const aplicacao = document.getElementById("aplicacao");
const classificacaoFk = document.getElementById("classificacaoFK");

function classificarFK() {
  const c55 = fkInput.value.trim();
  const c3 = sexo.value.trim();
  const c5 = escolaridade.value.trim();
  const c6 = atividade.value.trim();
  const c7 = tabela.value.trim();
  const c8 = aplicacao.value.trim();

  if (!c3 || !c5 || !c6 || !c7 || !c8 || c55 === "") {
    classificacaoFk.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
    return;
  }

  const valorFk = parseInt(c55);
  let resultado = "(classificação aparecerá aqui)";

  if (c8 === "Coletiva") {
    if (c7 === "Sexo" || c7 === "Escolaridade" || c7 === "Atividade Profissional") {
      resultado = valorFk <= 1 ? "Inferior" : valorFk === 2 ? "Médio" : "Superior";
    }
  }

  if (c8 === "Individual") {
    if (c7 === "Sexo" || c7 === "Escolaridade" || c7 === "Atividade Profissional") {
      resultado = valorFk <= 1 ? "Inferior" : valorFk === 2 ? "Médio" : "Superior";
    }
  }

  classificacaoFk.textContent = resultado;
}

// Adiciona escutadores de eventos para atualizar a classificação em tempo real
["input", "change"].forEach(eventType => {
  [fkInput, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
    el.addEventListener(eventType, classificarFK);
  });
});
