document.addEventListener('DOMContentLoaded', function () {
    const kk = document.getElementById('kk');
    const kf = document.getElementById('kf');
    const somaKKF = document.getElementById('somaKKF');
    const classificacaoKKF = document.getElementById('classificacaoKKF');
  
    const sexo = document.getElementById('sexo');
    const escolaridade = document.getElementById('escolaridade');
    const atividade = document.getElementById('atividade');
    const tabela = document.getElementById('tabela');
    const aplicacao = document.getElementById('aplicacao');
  
    function classificarKKF() {
      const valKK = parseInt(kk.value) || 0;
      const valKF = parseInt(kf.value) || 0;
      const total = valKK + valKF;
  
      somaKKF.textContent = total;
  
      const c3 = sexo.value;
      const c5 = escolaridade.value;
      const c6 = atividade.value;
      const c7 = tabela.value;
      const c8 = aplicacao.value;
  
      if (!kk.value || !kf.value || !c3 || !c5 || !c6 || !c7 || !c8) {
        classificacaoKKF.textContent = "⚠️ Preencha todos os campos para ver a classificação.";
        return;
      }
  
      let resultado = "(classificação aparecerá aqui)";
  
      if (c8 === "Coletiva") {
        if (["Sexo", "Escolaridade", "Atividade Profissional"].includes(c7)) {
          resultado = total <= 1 ? "Inferior" : total === 2 ? "Médio" : "Superior";
        }
      } else if (c8 === "Individual") {
        if (["Sexo", "Escolaridade", "Atividade Profissional"].includes(c7)) {
          resultado = total <= 1 ? "Inferior" : total === 2 ? "Médio" : "Superior";
        }
      }
  
      classificacaoKKF.textContent = resultado;
    }
  
    // Escuta eventos de entrada e mudança nos campos
    [kk, kf, sexo, escolaridade, atividade, tabela, aplicacao].forEach(el => {
      el.addEventListener('input', classificarKKF);
      el.addEventListener('change', classificarKKF);
    });
  });
  