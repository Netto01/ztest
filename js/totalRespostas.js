document.addEventListener('DOMContentLoaded', function () {
    const pb1 = document.getElementById('pb1');
    const pb2 = document.getElementById('pb2');
    const pb3 = document.getElementById('pb3');
    const totalR = document.getElementById('totalR');
    const classificacao = document.getElementById('classificacao');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function calcularTotalR() {
      const n1 = parseInt(pb1.value) || 0;
      const n2 = parseInt(pb2.value) || 0;
      const n3 = parseInt(pb3.value) || 0;
      const total = n1 + n2 + n3;
  
      totalR.textContent = total;
  
      const preenchidos = pb1.value !== "" && pb2.value !== "" && pb3.value !== "";
      const selectsPreenchidos = sexo.value && escolaridade.value && atividade.value && tabela.value && aplicacao.value;
  
      if (!preenchidos) {
        classificacao.textContent = "⚠️ Preencha os três campos da primeira linha para ver a classificação.";
        return;
      }
  
      if (!selectsPreenchidos) {
        classificacao.textContent = "⚠️ Preencha todos os campos de seleção para ver a classificação.";
        return;
      }
  
      aplicarClassificacao(total);
    }
  
    function aplicarClassificacao(c15) {
      const c3 = sexo.value;
      const c5 = escolaridade.value;
      const c6 = atividade.value;
      const c7 = tabela.value;
      const c8 = aplicacao.value;
  
      let resultado = "(classificação aparecerá aqui)";
  
      // Regras de classificação
      if (c3 === "Masculino" && c7 === "Sexo" && c8 === "Coletiva") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 6 ? "Médio" : "Superior";
      } else if (c3 === "Feminino" && c7 === "Sexo" && c8 === "Coletiva") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 11 ? "Médio" : "Superior";
      }
  
      if (c5 === "Ens. Fundamental" && c7 === "Escolaridade" && c8 === "Coletiva") {
        resultado = c15 <= 1 ? "Inferior" : c15 <= 11 ? "Médio" : "Superior";
      } else if (c5 === "Ens. Médio" && c7 === "Escolaridade" && c8 === "Coletiva") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 6 ? "Médio" : "Superior";
      } else if (c5 === "Ens. Superior" && c7 === "Escolaridade" && c8 === "Coletiva") {
        resultado = c15 <= 4 ? "Inferior" : c15 <= 11 ? "Médio" : "Superior";
      }
  
      if (c6 === "Sem Especialidade" && c7 === "Atividade Profissional" && c8 === "Coletiva") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 6 ? "Médio" : "Superior";
      } else if (c6 === "Especialidade de Nível Médio" && c7 === "Atividade Profissional" && c8 === "Coletiva") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 11 ? "Médio" : "Superior";
      } else if (c6 === "Especialidade de Nível Superior" && c7 === "Atividade Profissional" && c8 === "Coletiva") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 6 ? "Médio" : "Superior";
      }
  
      if (c3 === "Masculino" && c7 === "Sexo" && c8 === "Individual") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 15 ? "Médio" : "Superior";
      } else if (c3 === "Feminino" && c7 === "Sexo" && c8 === "Individual") {
        resultado = c15 <= 6 ? "Inferior" : c15 <= 15 ? "Médio" : "Superior";
      }
  
      if (c5 === "Ens. Fundamental" && c7 === "Escolaridade" && c8 === "Individual") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 17 ? "Médio" : "Superior";
      } else if (c5 === "Ens. Médio" && c7 === "Escolaridade" && c8 === "Individual") {
        resultado = c15 <= 6 ? "Inferior" : c15 <= 14 ? "Médio" : "Superior";
      } else if (c5 === "Ens. Superior" && c7 === "Escolaridade" && c8 === "Individual") {
        resultado = c15 <= 6 ? "Inferior" : c15 <= 14 ? "Médio" : "Superior";
      }
  
      if (c6 === "Sem Especialidade" && c7 === "Atividade Profissional" && c8 === "Individual") {
        resultado = c15 <= 5 ? "Inferior" : c15 <= 17 ? "Médio" : "Superior";
      } else if (c6 === "Especialidade de Nível Médio" && c7 === "Atividade Profissional" && c8 === "Individual") {
        resultado = c15 <= 7 ? "Inferior" : c15 <= 13 ? "Médio" : "Superior";
      } else if (c6 === "Especialidade de Nível Superior" && c7 === "Atividade Profissional" && c8 === "Individual") {
        resultado = c15 <= 3 ? "Inferior" : c15 <= 15 ? "Médio" : "Superior";
      }
  
      classificacao.textContent = resultado;
    }
  
    // Eventos
    [pb1, pb2, pb3, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener("input", calcularTotalR);
      el.addEventListener("change", calcularTotalR);
    });
  });
  