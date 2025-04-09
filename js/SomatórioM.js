document.addEventListener('DOMContentLoaded', function () {
    // Campos da Tabela M
    const mMais = document.getElementById('mMais');         // M+
    const mMenos = document.getElementById('mMenos');       // M-
    const mDuvidoso = document.getElementById('mDuvidoso'); // M+/-
    const somaM = document.getElementById('somaM');
    const classificacaoM = document.getElementById('classificacaoM');
  
    // Campos comuns
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function classificarM(valor, aplicacao, tabela, referencia) {
      if (aplicacao === "Coletiva") {
        if (["Sexo", "Escolaridade", "Atividade Profissional"].includes(tabela)) {
          return valor <= 1 ? "Inferior" : valor === 1 ? "Médio" : "Superior";
        }
      }
  
      if (aplicacao === "Individual") {
        if (tabela === "Sexo") {
          return valor <= 1 ? "Inferior" : valor === 1 ? "Médio" : "Superior";
        }
        if (tabela === "Escolaridade") {
          return valor <= 1 ? "Inferior" : valor === 1 ? "Médio" : "Superior";
        }
        if (tabela === "Atividade Profissional") {
          if (referencia === "Especialidade de Nível Médio" || referencia === "Especialidade de Nível Superior") {
            return valor <= 0 ? "Inferior" : valor === 1 ? "Médio" : "Superior";
          } else {
            return valor <= 1 ? "Inferior" : valor === 1 ? "Médio" : "Superior";
          }
        }
      }
  
      return "(classificação aparecerá aqui)";
    }
  
    function calcularClassificacaoM() {
      const valMmais = parseInt(mMais.value) || 0;
      const valMmenos = parseInt(mMenos.value) || 0;
      const valMduvidoso = parseInt(mDuvidoso.value) || 0;
  
      const total = valMmais + valMmenos + valMduvidoso;
      somaM.textContent = total;
  
      const valSexo = sexo.value;
      const valEscolaridade = escolaridade.value;
      const valAtividade = atividade.value;
      const valTabela = tabela.value;
      const valAplicacao = aplicacao.value;
  
      const algumCampoPreenchido = mMais.value || mMenos.value || mDuvidoso.value;
      const selectsPreenchidos = valSexo && valEscolaridade && valAtividade && valTabela && valAplicacao;
  
      if (!algumCampoPreenchido || !selectsPreenchidos) {
        classificacaoM.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      const referencia =
        valTabela === "Sexo" ? valSexo :
        valTabela === "Escolaridade" ? valEscolaridade :
        valAtividade;
  
      const resultado = classificarM(total, valAplicacao, valTabela, referencia);
      classificacaoM.textContent = resultado;
    }
  
    // Eventos
    ["mMais", "mMenos", "mDuvidoso", "sexo", "escolaridade", "atividade", "tabela", "aplicacao"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", calcularClassificacaoM);
        el.addEventListener("change", calcularClassificacaoM);
      }
    });
  });
  