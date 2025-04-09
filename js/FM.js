document.addEventListener('DOMContentLoaded', function () {
    const fm = document.getElementById('fm');
    const classificacaoFM = document.getElementById('classificacaoFM');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function classificarFM(valor, aplicacao, tabela, referencia) {
      if (aplicacao === "Coletiva") {
        return valor <= 1 ? "Inferior" : valor === 2 ? "Médio" : "Superior";
      }
  
      if (aplicacao === "Individual") {
        return valor <= 1 ? "Inferior" : valor === 2 ? "Médio" : "Superior";
      }
  
      return "(classificação aparecerá aqui)";
    }
  
    function calcularClassificacaoFM() {
      const valFM = parseInt(fm.value) || 0;
  
      const valSexo = sexo.value;
      const valEscolaridade = escolaridade.value;
      const valAtividade = atividade.value;
      const valTabela = tabela.value;
      const valAplicacao = aplicacao.value;
  
      const preenchido = fm.value !== "";
  
      if (
        !preenchido ||
        valSexo === "" || valEscolaridade === "" ||
        valAtividade === "" || valTabela === "" || valAplicacao === ""
      ) {
        classificacaoFM.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      const referencia =
        valTabela === "Sexo" ? valSexo :
        valTabela === "Escolaridade" ? valEscolaridade :
        valAtividade;
  
      const resultado = classificarFM(valFM, valAplicacao, valTabela, referencia);
      classificacaoFM.textContent = resultado;
    }
  
    // Adiciona os eventos aos campos envolvidos
    [fm, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener("input", calcularClassificacaoFM);
      el.addEventListener("change", calcularClassificacaoFM);
    });
  });
  