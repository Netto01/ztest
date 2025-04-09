document.addEventListener('DOMContentLoaded', function () {
    const C = document.getElementById('C');
    const csimb = document.getElementById('csimb');
    const cdesc = document.getElementById('cdesc');
    const cn = document.getElementById('cn');
  
    const somaC = document.getElementById('somaC');
    const classificacaoC = document.getElementById('classificacaoC');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function classificarC() {
      const valC = Number(C.value) || 0;
      const valSimbolica = Number(csimb.value) || 0;
      const valDescrita = Number(cdesc.value) || 0;
      const valNomeada = Number(cn.value) || 0;
  
      const total = valC + valSimbolica + valDescrita + valNomeada;
      somaC.textContent = total;
  
      const c3 = sexo.value;
      const c5 = escolaridade.value;
      const c6 = atividade.value;
      const c7 = tabela.value;
      const c8 = aplicacao.value;
  
      if (!C.value || !csimb.value || !cdesc.value || !cn.value || !c3 || !c5 || !c6 || !c7 || !c8) {
        classificacaoC.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      let resultado = "Condições não atendidas";
  
      // ADMINISTRAÇÃO COLETIVA
      if (c8 === "Coletiva") {
        // Sexo
        if (c7 === "Sexo" && (c3 === "Masculino" || c3 === "Feminino")) {
          resultado = total === 0 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
  
        // Escolaridade
        if (c7 === "Escolaridade" && ["Ens. Fundamental", "Ens. Médio", "Ens. Superior"].includes(c5)) {
          resultado = total === 0 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
  
        // Atividade Profissional
        if (c7 === "Atividade Profissional" && [
          "Sem Especialidade",
          "Especialidade de Nível Médio",
          "Especialidade de Nível Superior"
        ].includes(c6)) {
          resultado = total === 0 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
      }
  
      // ADMINISTRAÇÃO INDIVIDUAL
      if (c8 === "Individual") {
        // Sexo
        if (c7 === "Sexo" && (c3 === "Masculino" || c3 === "Feminino")) {
          resultado = total === 0 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
  
        // Escolaridade
        if (c7 === "Escolaridade" && ["Ens. Fundamental", "Ens. Médio", "Ens. Superior"].includes(c5)) {
          resultado = total === 0 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
  
        // Atividade Profissional
        if (c7 === "Atividade Profissional" && [
          "Sem Especialidade",
          "Especialidade de Nível Médio",
          "Especialidade de Nível Superior"
        ].includes(c6)) {
          resultado = total === 0 ? "Inferior" : total === 1 ? "Médio" : "Superior";
        }
      }
  
      classificacaoC.textContent = resultado;
    }
  
    [C, csimb, cdesc, cn, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener('input', classificarC);
      el.addEventListener('change', classificarC);
    });
  });
  