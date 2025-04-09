document.addEventListener('DOMContentLoaded', function () {
    // 🎯 Campos da Tabela F
    const fMais = document.getElementById('fMais');           // F+
    const fMenos = document.getElementById('fMenos');         // F-
    const fDuvidosa = document.getElementById('fDuvidosa');   // F+/-
  
    const somaF = document.getElementById('somaF');
    const classificacaoF = document.getElementById('classificacaoF');
  
    // Campos comuns
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    // Função de classificação F
    function classificarF(valor, aplicacao, tabela, referencia) {
      if (aplicacao === "Coletiva") {
        if (tabela === "Sexo") {
          if (referencia === "Masculino") {
            return valor <= 0 ? "Inferior" : valor <= 3 ? "Médio" : "Superior";
          } else if (referencia === "Feminino") {
            return valor <= 3 ? "Inferior" : valor === 4 ? "Médio" : "Superior";
          }
        }
        if (tabela === "Escolaridade") {
          if (referencia === "Ens. Fundamental") {
            return valor <= 1 ? "Inferior" : valor === 6 ? "Médio" : "Superior";
          } else if (referencia === "Ens. Médio") {
            return valor <= 0 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
          } else if (referencia === "Ens. Superior") {
            return valor <= 1 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
          }
        }
        if (tabela === "Atividade Profissional") {
          if (referencia === "Sem Especialidade") {
            return valor <= 1 ? "Inferior" : valor <= 5 ? "Médio" : "Superior";
          } else if (referencia === "Especialidade de Nível Médio") {
            return valor <= 1 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
          } else if (referencia === "Especialidade de Nível Superior") {
            return valor <= 1 ? "Inferior" : valor <= 5 ? "Médio" : "Superior";
          }
        }
      }
  
      if (aplicacao === "Individual") {
        if (tabela === "Sexo") {
          if (referencia === "Masculino") {
            return valor <= 1 ? "Inferior" : valor <= 9 ? "Médio" : "Superior";
          } else if (referencia === "Feminino") {
            return valor <= 5 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
          }
        }
        if (tabela === "Escolaridade") {
          if (referencia === "Ens. Fundamental") {
            return valor <= 1 ? "Inferior" : valor <= 10 ? "Médio" : "Superior";
          } else if (referencia === "Ens. Médio") {
            return valor <= 2 ? "Inferior" : valor <= 8 ? "Médio" : "Superior";
          } else if (referencia === "Ens. Superior") {
            return valor <= 2 ? "Inferior" : valor <= 8 ? "Médio" : "Superior";
          }
        }
        if (tabela === "Atividade Profissional") {
          if (referencia === "Sem Especialidade") {
            return valor <= 2 ? "Inferior" : valor <= 10 ? "Médio" : "Superior";
          } else if (referencia === "Especialidade de Nível Médio") {
            return valor <= 2 ? "Inferior" : valor <= 7 ? "Médio" : "Superior";
          } else if (referencia === "Especialidade de Nível Superior") {
            return valor <= 1 ? "Inferior" : valor <= 8 ? "Médio" : "Superior";
          }
        }
      }
  
      return "(classificação aparecerá aqui)";
    }
  
    // Função de cálculo e exibição
    function calcularClassificacaoF() {
      const valFmais = parseInt(fMais.value) || 0;
      const valFmenos = parseInt(fMenos.value) || 0;
      const valFduvidosa = parseInt(fDuvidosa.value) || 0;
  
      const total = valFmais + valFmenos + valFduvidosa;
      somaF.textContent = total;
  
      const valSexo = sexo.value;
      const valEscolaridade = escolaridade.value;
      const valAtividade = atividade.value;
      const valTabela = tabela.value;
      const valAplicacao = aplicacao.value;
  
      const algumCampoPreenchido = fMais.value || fMenos.value || fDuvidosa.value;
      const selectsPreenchidos = valSexo && valEscolaridade && valAtividade && valTabela && valAplicacao;
  
      if (!algumCampoPreenchido || !selectsPreenchidos) {
        classificacaoF.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      const referencia =
        valTabela === "Sexo" ? valSexo :
        valTabela === "Escolaridade" ? valEscolaridade :
        valAtividade;
  
      const resultado = classificarF(total, valAplicacao, valTabela, referencia);
      classificacaoF.textContent = resultado;
    }
  
    // Eventos
    ["fMais", "fMenos", "fDuvidosa", "sexo", "escolaridade", "atividade", "tabela", "aplicacao"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", calcularClassificacaoF);
        el.addEventListener("change", calcularClassificacaoF);
      }
    });
  });
  