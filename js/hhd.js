document.addEventListener('DOMContentLoaded', function () {
    const h = document.getElementById('h');
    const hd = document.getElementById('hd');
    const somaH = document.getElementById('somaH');
    const classificacaoH = document.getElementById('classificacaoH');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function classificarH() {
      const valH = Number(h.value) || 0;
      const valHD = Number(hd.value) || 0;
  
      const total = valH + valHD;
      somaH.textContent = total;
  
      const c3 = sexo.value;
      const c5 = escolaridade.value;
      const c6 = atividade.value;
      const c7 = tabela.value;
      const c8 = aplicacao.value;
  
      if (!h.value || !hd.value || !c3 || !c5 || !c6 || !c7 || !c8) {
        classificacaoH.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      let resultado = "Condições não atendidas";
  
      // Administração Coletiva e Sexo
      if (c7 === "Sexo" && c8 === "Coletiva") {
        if (c3 === "Masculino") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        } else if (c3 === "Feminino") {
          resultado = total < 2 ? "Inferior" : total === 2 ? "Médio" : "Superior";
        }
      }
  
      // Escolaridade
      if (c7 === "Escolaridade" && c8 === "Coletiva") {
        if (c5 === "Ens. Fundamental" || c5 === "Ens. Médio") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        } else if (c5 === "Ens. Superior") {
          resultado = total < 2 ? "Inferior" : total === 2 ? "Médio" : "Superior";
        }
      }
  
      // Atividade Profissional
      if (c7 === "Atividade Profissional" && c8 === "Coletiva") {
        if (c6 === "Sem Especialidade" || c6 === "Especialidade de Nível Médio") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        } else if (c6 === "Especialidade de Nível Superior") {
          resultado = total < 2 ? "Inferior" : total === 2 ? "Médio" : "Superior";
        }
      }
  
      // Administração Individual e Sexo
      if (c7 === "Sexo" && c8 === "Individual") {
        if (c3 === "Masculino" || c3 === "Feminino") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
      }
  
      // Escolaridade (Individual)
      if (c7 === "Escolaridade" && c8 === "Individual") {
        if (c5 === "Ens. Fundamental" || c5 === "Ens. Médio") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        } else if (c5 === "Ens. Superior") {
          resultado = total < 2 ? "Inferior" : total === 2 ? "Médio" : "Superior";
        }
      }
  
      // Atividade Profissional (Individual)
      if (c7 === "Atividade Profissional" && c8 === "Individual") {
        if (c6 === "Sem Especialidade") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        } else if (c6 === "Especialidade de Nível Médio") {
          resultado = total === 0 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        } else if (c6 === "Especialidade de Nível Superior") {
          resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
      }
  
      classificacaoH.textContent = resultado;
    }
  
    [h, hd, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener('input', classificarH);
      el.addEventListener('change', classificarH);
    });
  });
  