document.addEventListener('DOMContentLoaded', function () {
    // --- Campos G ---
    const g = document.getElementById('g');
    const gcort = document.getElementById('gcort');
    const dg = document.getElementById('dg');
    const somaG = document.getElementById('somaG');
    const classificacaoG = document.getElementById('classificacaoG');
  
    // --- Campos de seleção comuns ---
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    // 🔁 Módulo reutilizável de classificação
    function classificarPorTabela(valor, aplicacao, tabela, referencia) {
      if (aplicacao === "Coletiva") {
        return valor <= 0 ? "Inferior" : valor <= 2 ? "Médio" : "Superior";
      }
  
      if (aplicacao === "Individual") {
        if (tabela === "Sexo") {
          if (referencia === "Masculino") {
            return valor <= 0 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
          } else if (referencia === "Feminino") {
            return valor <= 1 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
          }
        }
  
        if (tabela === "Escolaridade") {
          if (referencia === "Ens. Fundamental") {
            return valor <= 0 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
          } else if (referencia === "Ens. Médio") {
            return valor <= 0 ? "Inferior" : valor <= 2 ? "Médio" : "Superior";
          } else if (referencia === "Ens. Superior") {
            return valor <= 0 ? "Inferior" : valor <= 5 ? "Médio" : "Superior";
          }
        }
  
        if (tabela === "Atividade Profissional") {
          if (referencia === "Sem Especialidade") {
            return valor <= 0 ? "Inferior" : valor <= 7 ? "Médio" : "Superior";
          } else if (referencia === "Especialidade de Nível Médio") {
            return valor <= 0 ? "Inferior" : valor <= 2 ? "Médio" : "Superior";
          } else if (referencia === "Especialidade de Nível Superior") {
            return valor <= 0 ? "Inferior" : valor <= 6 ? "Médio" : "Superior";
          }
        }
      }
  
      return "(classificação aparecerá aqui)";
    }
  
    // 🔷 Cálculo e Classificação de G
    function calcularClassificacaoG() {
      const vG = parseInt(g.value) || 0;
      const vGcort = parseInt(gcort.value) || 0;
      const vDG = parseInt(dg.value) || 0;
  
      const totalG = vG + vGcort + vDG;
      somaG.textContent = totalG;
  
      // Verificação de preenchimento dos campos
      if (
        g.value === "" || gcort.value === "" || dg.value === "" ||
        sexo.value === "" || escolaridade.value === "" ||
        atividade.value === "" || tabela.value === "" || aplicacao.value === ""
      ) {
        classificacaoG.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      // Determina a variável de referência conforme tabela selecionada
      const referencia =
        tabela.value === "Sexo" ? sexo.value :
        tabela.value === "Escolaridade" ? escolaridade.value :
        tabela.value === "Atividade Profissional" ? atividade.value : "";
  
      const resultado = classificarPorTabela(totalG, aplicacao.value, tabela.value, referencia);
      classificacaoG.textContent = resultado;
    }
  
    // 🔁 Eventos para cálculo automático
    [g, gcort, dg, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener("input", calcularClassificacaoG);
      el.addEventListener("change", calcularClassificacaoG);
    });
  });
  