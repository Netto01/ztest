document.addEventListener('DOMContentLoaded', function () {
  // Campo da variável D
  const campoD = document.getElementById('d');
  const classificacaoD = document.getElementById('classificacaoD');

  // Campos comuns
  const sexo = document.getElementById('sexo');
  const escolaridade = document.getElementById('escolaridade');
  const atividade = document.getElementById('atividade');
  const tabela = document.getElementById('tabela');
  const aplicacao = document.getElementById('aplicacao');

  function classificarD(valor, aplicacao, tabela, referencia) {
    if (aplicacao === "Coletiva") {
      if (tabela === "Sexo") {
        if (referencia === "Masculino") {
          return valor <= 1 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
        } else if (referencia === "Feminino") {
          return valor <= 1 ? "Inferior" : valor <= 8 ? "Médio" : "Superior";
        }
      }

      if (tabela === "Escolaridade") {
        if (referencia === "Ens. Fundamental") {
          return valor <= 1 ? "Inferior" : valor === 2 ? "Médio" : "Superior";
        } else if (referencia === "Ens. Médio") {
          return valor <= 2 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
        } else if (referencia === "Ens. Superior") {
          return valor <= 1 ? "Inferior" : valor <= 10 ? "Médio" : "Superior";
        }
      }

      if (tabela === "Atividade Profissional") {
        if (referencia === "Sem Especialidade") {
          return valor <= 1 ? "Inferior" : valor <= 3 ? "Médio" : "Superior";
        } else if (referencia === "Especialidade de Nível Médio") {
          return valor <= 1 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
        } else if (referencia === "Especialidade de Nível Superior") {
          return valor <= 1 ? "Inferior" : valor <= 3 ? "Médio" : "Superior";
        }
      }
    }

    if (aplicacao === "Individual") {
      if (tabela === "Sexo") {
        if (referencia === "Masculino") {
          return valor <= 1 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
        } else if (referencia === "Feminino") {
          return valor <= 3 ? "Inferior" : valor <= 9 ? "Médio" : "Superior";
        }
      }

      if (tabela === "Escolaridade") {
        if (referencia === "Ens. Fundamental") {
          return valor <= 1 ? "Inferior" : valor <= 8 ? "Médio" : "Superior";
        } else if (referencia === "Ens. Médio") {
          return valor <= 2 ? "Inferior" : valor <= 8 ? "Médio" : "Superior";
        } else if (referencia === "Ens. Superior") {
          return valor <= 3 ? "Inferior" : valor <= 9 ? "Médio" : "Superior";
        }
      }

      if (tabela === "Atividade Profissional") {
        if (referencia === "Sem Especialidade") {
          return valor <= 1 ? "Inferior" : valor <= 8 ? "Médio" : "Superior";
        } else if (referencia === "Especialidade de Nível Médio") {
          return valor <= 3 ? "Inferior" : valor <= 9 ? "Médio" : "Superior";
        } else if (referencia === "Especialidade de Nível Superior") {
          return valor <= 2 ? "Inferior" : valor <= 8 ? "Médio" : "Superior";
        }
      }
    }

    return "(classificação aparecerá aqui)";
  }

  function calcularClassificacaoD() {
    const valorD = parseInt(campoD.value) || 0;

    const valSexo = sexo.value;
    const valEscolaridade = escolaridade.value;
    const valAtividade = atividade.value;
    const valTabela = tabela.value;
    const valAplicacao = aplicacao.value;

    const campoPreenchido = campoD.value !== "";
    const selectsPreenchidos = valSexo && valEscolaridade && valAtividade && valTabela && valAplicacao;

    if (!campoPreenchido || !selectsPreenchidos) {
      classificacaoD.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
      return;
    }

    const referencia =
      valTabela === "Sexo" ? valSexo :
      valTabela === "Escolaridade" ? valEscolaridade :
      valAtividade;

    const resultado = classificarD(valorD, valAplicacao, valTabela, referencia);
    classificacaoD.textContent = resultado;
  }

  // Eventos
  ["d", "sexo", "escolaridade", "atividade", "tabela", "aplicacao"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", calcularClassificacaoD);
      el.addEventListener("change", calcularClassificacaoD);
    }
  });
});
