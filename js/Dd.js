document.addEventListener('DOMContentLoaded', function () {
  // 🟥 Campos da Tabela Dd
  const dd = document.getElementById('dd');         // Detalhe Incomum (Dd)
  const dr = document.getElementById('dr');         // Detalhe Raro
  const ddim = document.getElementById('ddim');     // Detalhe Diminuto
  const de = document.getElementById('de');         // Detalhe Externo
  const doCampo = document.getElementById('do');    // Detalhe Inibitório

  const somaDd = document.getElementById('somaDd');
  const classificacaoDd = document.getElementById('classificacaoDd');

  // Campos comuns
  const sexo = document.getElementById('sexo');
  const escolaridade = document.getElementById('escolaridade');
  const atividade = document.getElementById('atividade');
  const tabela = document.getElementById('tabela');
  const aplicacao = document.getElementById('aplicacao');

  // Função de Classificação
  function classificarDd(valor, aplicacao, tabela, referencia) {
    if (aplicacao === "Coletiva") {
      if (tabela === "Sexo") {
        return valor <= 1 ? "Inferior" : valor <= 2 ? "Médio" : "Superior";
      }

      if (tabela === "Escolaridade") {
        if (referencia === "Ens. Fundamental") {
          return valor <= 1 ? "Inferior" : valor === 2 ? "Médio" : "Superior";
        }
        return valor <= 1 ? "Inferior" : valor <= 2 ? "Médio" : "Superior";
      }

      if (tabela === "Atividade Profissional") {
        return valor <= 1 ? "Inferior" : valor <= 2 ? "Médio" : "Superior";
      }
    }

    if (aplicacao === "Individual") {
      return valor <= 1 ? "Inferior" : valor <= 2 ? "Médio" : "Superior";
    }

    return "(classificação aparecerá aqui)";
  }

  // Função principal
  function calcularClassificacaoDd() {
    // Soma todos os elementos da Tabela Dd
    const total =
      (parseInt(dd.value) || 0) +
      (parseInt(dr.value) || 0) +
      (parseInt(ddim.value) || 0) +
      (parseInt(de.value) || 0) +
      (parseInt(doCampo.value) || 0);

    // Exibe somatório
    somaDd.textContent = total;

    // Verifica se todos os campos necessários estão preenchidos
    const valSexo = sexo.value;
    const valEscolaridade = escolaridade.value;
    const valAtividade = atividade.value;
    const valTabela = tabela.value;
    const valAplicacao = aplicacao.value;

    const algumCampoPreenchido =
      dd.value !== "" || dr.value !== "" || ddim.value !== "" || de.value !== "" || doCampo.value !== "";

    const selectsPreenchidos =
      valSexo && valEscolaridade && valAtividade && valTabela && valAplicacao;

    if (!algumCampoPreenchido || !selectsPreenchidos) {
      classificacaoDd.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
      return;
    }

    // Define qual será o valor de referência
    const referencia =
      valTabela === "Sexo" ? valSexo :
      valTabela === "Escolaridade" ? valEscolaridade :
      valAtividade;

    // Aplica classificação
    const resultado = classificarDd(total, valAplicacao, valTabela, referencia);
    classificacaoDd.textContent = resultado;
  }

  // 🟡 Eventos para atualização dinâmica
  ["dd", "dr", "ddim", "de", "do", "sexo", "escolaridade", "atividade", "tabela", "aplicacao"].forEach(id => {
    const el = document.getElementById(id === "do" ? "do" : id);
    if (el) {
      el.addEventListener("input", calcularClassificacaoDd);
      el.addEventListener("change", calcularClassificacaoDd);
    }
  });
});
