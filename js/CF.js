document.addEventListener('DOMContentLoaded', function () {
    const cf = document.getElementById('CF');
    const cMenosF = document.getElementById('cMenosF');
    const cBarraF = document.getElementById('cBarraF');
    const somaCF = document.getElementById('somaCF');
    const classificacaoCF = document.getElementById('classificacaoCF');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function classificarCF() {
      const valCf = Number(cf.value) || 0;
      const valCMenosF = Number(cMenosF.value) || 0;
      const valCBarraF = Number(cBarraF.value) || 0;
  
      const total = valCf + valCMenosF + valCBarraF;
      somaCF.textContent = total;
  
      const c3 = sexo.value;
      const c5 = escolaridade.value;
      const c6 = atividade.value;
      const c7 = tabela.value;
      const c8 = aplicacao.value;
  
      if (!cf.value || !cMenosF.value || !cBarraF.value || !c3 || !c5 || !c6 || !c7 || !c8) {
        classificacaoCF.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      let resultado = "Condições não atendidas";
  
      // 🔷 ADMINISTRAÇÃO COLETIVA
  
      // Sexo
      if (c7 === "Sexo" && c8 === "Coletiva") {
        if (c3 === "Masculino") {
          resultado = total === 0 ? "Inferior" : total <= 3 ? "Médio" : "Superior";
        } else if (c3 === "Feminino") {
          resultado = total <= 3 ? "Inferior" : total === 4 ? "Médio" : "Superior";
        }
      }
  
      // Escolaridade
      if (c7 === "Escolaridade" && c8 === "Coletiva") {
        if (c5 === "Ens. Fundamental") {
          resultado = total <= 1 ? "Inferior" : total <= 6 ? "Médio" : "Superior";
        } else if (c5 === "Ens. Médio") {
          resultado = total === 0 ? "Inferior" : total <= 6 ? "Médio" : "Superior";
        } else if (c5 === "Ens. Superior") {
          resultado = total <= 1 ? "Inferior" : total <= 6 ? "Médio" : "Superior";
        }
      }
  
      // Atividade Profissional
      if (c7 === "Atividade Profissional" && c8 === "Coletiva") {
        if (c6 === "Sem Especialidade") {
          resultado = total === 0 ? "Inferior" : total <= 5 ? "Médio" : "Superior";
        } else if (c6 === "Especialidade de Nível Médio") {
          resultado = total <= 1 ? "Inferior" : total <= 6 ? "Médio" : "Superior";
        } else if (c6 === "Especialidade de Nível Superior") {
          resultado = total <= 1 ? "Inferior" : total <= 5 ? "Médio" : "Superior";
        }
      }
  
      // 🔷 ADMINISTRAÇÃO INDIVIDUAL
  
      // Sexo
      if (c7 === "Sexo" && c8 === "Individual") {
        if (c3 === "Masculino") {
          resultado = total <= 1 ? "Inferior" : total <= 9 ? "Médio" : "Superior";
        } else if (c3 === "Feminino") {
          resultado = total <= 5 ? "Inferior" : total === 6 ? "Médio" : "Superior";
        }
      }
  
      // Escolaridade
      if (c7 === "Escolaridade" && c8 === "Individual") {
        if (c5 === "Ens. Fundamental") {
          resultado = total <= 1 ? "Inferior" : total <= 10 ? "Médio" : "Superior";
        } else if (c5 === "Ens. Médio") {
          resultado = total <= 2 ? "Inferior" : total <= 8 ? "Médio" : "Superior";
        } else if (c5 === "Ens. Superior") {
          resultado = total <= 2 ? "Inferior" : total <= 8 ? "Médio" : "Superior";
        }
      }
  
      // Atividade Profissional
      if (c7 === "Atividade Profissional" && c8 === "Individual") {
        if (c6 === "Sem Especialidade") {
          resultado = total <= 2 ? "Inferior" : total <= 10 ? "Médio" : "Superior";
        } else if (c6 === "Especialidade de Nível Médio") {
          resultado = total <= 2 ? "Inferior" : total <= 7 ? "Médio" : "Superior";
        } else if (c6 === "Especialidade de Nível Superior") {
          resultado = total === 0 ? "Inferior" : total <= 8 ? "Médio" : "Superior";
        }
      }
  
      classificacaoCF.textContent = resultado;
    }
  
    [cf, cMenosF, cBarraF, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener('input', classificarCF);
      el.addEventListener('change', classificarCF);
    });
  });
  