document.addEventListener('DOMContentLoaded', function () {
    const fMais = document.getElementById('fMais');
    const classificacaoFMais = document.getElementById('classificacaoFMais');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
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
  
    function calcularClassificacaoFMais() {
      const valor = parseInt(fMais.value) || 0;
  
      const valSexo = sexo.value;
      const valEscolaridade = escolaridade.value;
      const valAtividade = atividade.value;
      const valTabela = tabela.value;
      const valAplicacao = aplicacao.value;
  
      if (
        fMais.value === "" ||
        valSexo === "" || valEscolaridade === "" ||
        valAtividade === "" || valTabela === "" || valAplicacao === ""
      ) {
        classificacaoFMais.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      const referencia =
        valTabela === "Sexo" ? valSexo :
        valTabela === "Escolaridade" ? valEscolaridade :
        valAtividade;
  
      const resultado = classificarF(valor, valAplicacao, valTabela, referencia);
      classificacaoFMais.textContent = resultado;
    }
  
    // Eventos de entrada
    ["fMais", "sexo", "escolaridade", "atividade", "tabela", "aplicacao"].forEach(id => {
      const el = document.getElementById(id);
      el.addEventListener("input", calcularClassificacaoFMais);
      el.addEventListener("change", calcularClassificacaoFMais);
    });
  });
  