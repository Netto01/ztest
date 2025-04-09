document.addEventListener('DOMContentLoaded', function () {
    const a = document.getElementById('a');
    const ad = document.getElementById('ad');
    const somaAnimal = document.getElementById('somaAnimal');
    const classificacaoAnimal = document.getElementById('classificacaoAnimal');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function classificarAnimal() {
      const valA = Number(a.value) || 0;
      const valAD = Number(ad.value) || 0;
  
      const total = valA + valAD;
      somaAnimal.textContent = total;
  
      const c3 = sexo.value;
      const c5 = escolaridade.value;
      const c6 = atividade.value;
      const c7 = tabela.value;
      const c8 = aplicacao.value;
  
      if (!a.value || !ad.value || !c3 || !c5 || !c6 || !c7 || !c8) {
        classificacaoAnimal.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      let resultado = "Condições não atendidas";
  
      // Coletiva e Sexo
      if (c7 === "Sexo" && c8 === "Coletiva") {
        resultado = total < 2 ? "Inferior" : total === 2 ? "Médio" : "Superior";
      }
  
      // Coletiva e Escolaridade
      if (c7 === "Escolaridade" && c8 === "Coletiva") {
        if (c5 === "Ens. Fundamental") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        } else if (c5 === "Ens. Médio" || c5 === "Ens. Superior") {
          resultado = total <= 2 ? "Inferior" : total === 3 ? "Médio" : "Superior";
        }
      }
  
      // Coletiva e Atividade Profissional
      if (c7 === "Atividade Profissional" && c8 === "Coletiva") {
        if (c6 === "Sem Especialidade" || c6 === "Especialidade de Nível Médio") {
          resultado = total <= 1 ? "Inferior" : total === 2 ? "Médio" : "Superior";
        } else if (c6 === "Especialidade de Nível Superior") {
          resultado = total <= 2 ? "Inferior" : total === 3 ? "Médio" : "Superior";
        }
      }
  
      // Individual e Sexo
      if (c7 === "Sexo" && c8 === "Individual") {
        resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
      }
  
      // Individual e Escolaridade
      if (c7 === "Escolaridade" && c8 === "Individual") {
        if (c5 === "Ens. Fundamental") {
          resultado = "Não há classificação segundo o manual";
        } else if (c5 === "Ens. Médio") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        } else if (c5 === "Ens. Superior") {
          resultado = total <= 2 ? "Inferior" : total === 3 ? "Médio" : "Superior";
        }
      }
  
      // Individual e Atividade Profissional
      if (c7 === "Atividade Profissional" && c8 === "Individual") {
        if (c6 === "Sem Especialidade" || c6 === "Especialidade de Nível Médio" || c6 === "Especialidade de Nível Superior") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
      }
  
      classificacaoAnimal.textContent = resultado;
    }
  
    [a, ad, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener('input', classificarAnimal);
      el.addEventListener('change', classificarAnimal);
    });
  });
  