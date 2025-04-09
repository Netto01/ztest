document.addEventListener('DOMContentLoaded', function () {
  const fc = document.getElementById('fc');
  const cf = document.getElementById('cf');
  const c = document.getElementById('c');
  const somaFc = document.getElementById('somaFc');
  const classificacaoFc = document.getElementById('classificacaoFc');

  const sexo = document.getElementById('sexo');
  const escolaridade = document.getElementById('escolaridade');
  const atividade = document.getElementById('atividade');
  const tabela = document.getElementById('tabela');
  const aplicacao = document.getElementById('aplicacao');

  function classificarFc() {
    const valFc = Number(fc.value) || 0;
    const valCf = Number(cf.value) || 0;
    const valC = Number(c.value) || 0;

    const total = valFc + valCf + valC;
    somaFc.textContent = total;

    const c3 = sexo.value;
    const c5 = escolaridade.value;
    const c6 = atividade.value;
    const c7 = tabela.value;
    const c8 = aplicacao.value;

    if (!fc.value || !cf.value || !c.value || !c3 || !c5 || !c6 || !c7 || !c8) {
      classificacaoFc.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
      return;
    }

    let resultado = "Condições não atendidas";

    const escolaridades = ["Ens. Fundamental", "Ens. Médio", "Ens. Superior"];
    const atividades = [
      "Sem Especialidade",
      "Especialidade de Nível Médio",
      "Especialidade de Nível Superior"
    ];

    // Sexo (Coletiva e Individual)
    if (c7 === "Sexo" && (c3 === "Masculino" || c3 === "Feminino") && (c8 === "Coletiva" || c8 === "Individual")) {
      resultado = total <= 1 ? "Inferior" : total === 2 ? "Médio" : "Superior";
    }

    // Escolaridade (Coletiva e Individual)
    if (c7 === "Escolaridade" && escolaridades.includes(c5) && (c8 === "Coletiva" || c8 === "Individual")) {
      resultado = total <= 1 ? "Inferior" : total === 2 ? "Médio" : "Superior";
    }

    // Atividade Profissional (Coletiva e Individual)
    if (c7 === "Atividade Profissional" && atividades.includes(c6) && (c8 === "Coletiva" || c8 === "Individual")) {
      resultado = total <= 1 ? "Inferior" : total === 2 ? "Médio" : "Superior";
    }

    classificacaoFc.textContent = resultado;
  }

  [fc, cf, c, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
    el.addEventListener('input', classificarFc);
    el.addEventListener('change', classificarFc);
  });
});
