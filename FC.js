document.addEventListener('DOMContentLoaded', function () {
    const FC = document.getElementById('FC');
    const fMenosC = document.getElementById('fMenosC');
    const fBarraC = document.getElementById('fBarraC');
    const somaFC = document.getElementById('somaFC');
    const classificacaoFC = document.getElementById('classificacaoFC');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function classificarFC() {
      // Obtem os valores dos inputs
      const valFC = Number(FC.value) || 0;
      const valFMenosC = Number(fMenosC.value) || 0;
      const valFBarraC = Number(fBarraC.value) || 0;
  
      // Soma total
      const total = valFC + valFMenosC + valFBarraC;
      somaFC.textContent = total;
  
      const c3 = sexo.value;
      const c5 = escolaridade.value;
      const c6 = atividade.value;
      const c7 = tabela.value;
      const c8 = aplicacao.value;
  
      if (!c3 || !c5 || !c6 || !c7 || !c8) {
        classificacaoFC.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      let resultado = "Condições não atendidas";
  
      const escolaridades = ["Ens. Fundamental", "Ens. Médio", "Ens. Superior"];
      const atividades = [
        "Sem Especialidade",
        "Especialidade de Nível Médio",
        "Especialidade de Nível Superior"
      ];
  
      // Sexo
      if (c7 === "Sexo" && (c3 === "Masculino" || c3 === "Feminino") && (c8 === "Coletiva" || c8 === "Individual")) {
        resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
      }
  
      // Escolaridade
      if (c7 === "Escolaridade" && escolaridades.includes(c5) && (c8 === "Coletiva" || c8 === "Individual")) {
        resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
      }
  
      // Atividade
      if (c7 === "Atividade Profissional" && atividades.includes(c6) && (c8 === "Coletiva" || c8 === "Individual")) {
        resultado = total < 1 ? "Inferior" : total === 1 ? "Médio" : "Superior";
      }
  
      classificacaoFC.textContent = resultado;
    }
  
    [FC, fMenosC, fBarraC, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener('input', classificarFC);
      el.addEventListener('change', classificarFC);
    });
  });
  