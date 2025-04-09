function classificarFCLinha(c73) {
    const sexo = document.getElementById("sexo").value;
    const escolaridade = document.getElementById("escolaridade").value;
    const atividade = document.getElementById("atividade").value;
    const aplicacao = document.getElementById("aplicacao").value;
  
    let resultado = "Condições não atendidas";
  
    // Verifica combinações por sexo
    if (["Masculino", "Feminino"].includes(sexo) && aplicacao === "Coletiva") {
      if (c73 === 0) resultado = "Inferior";
      else if (c73 === 1) resultado = "Médio";
      else if (c73 >= 2) resultado = "Superior";
    }
  
    // Verifica combinações por escolaridade
    const escolaridadesValidas = ["Ens. Fundamental", "Ens. Médio", "Ens. Superior"];
    if (escolaridadesValidas.includes(escolaridade) && aplicacao === "Coletiva") {
      if (c73 === 0) resultado = "Inferior";
      else if (c73 === 1) resultado = "Médio";
      else if (c73 >= 2) resultado = "Superior";
    }
  
    // Verifica combinações por atividade profissional
    const atividadesValidas = [
      "Sem Especialidade",
      "Especialidade de Nível Médio",
      "Especialidade de Nível Superior"
    ];
    if (atividadesValidas.includes(atividade) && aplicacao === "Coletiva") {
      if (c73 === 0) resultado = "Inferior";
      else if (c73 === 1) resultado = "Médio";
      else if (c73 >= 2) resultado = "Superior";
    }
  
    // Repetição da lógica para aplicação individual
    if (["Masculino", "Feminino"].includes(sexo) && aplicacao === "Individual") {
      if (c73 === 0) resultado = "Inferior";
      else if (c73 === 1) resultado = "Médio";
      else if (c73 >= 2) resultado = "Superior";
    }
  
    if (escolaridadesValidas.includes(escolaridade) && aplicacao === "Individual") {
      if (c73 === 0) resultado = "Inferior";
      else if (c73 === 1) resultado = "Médio";
      else if (c73 >= 2) resultado = "Superior";
    }
  
    if (atividadesValidas.includes(atividade) && aplicacao === "Individual") {
      if (c73 === 0) resultado = "Inferior";
      else if (c73 === 1) resultado = "Médio";
      else if (c73 >= 2) resultado = "Superior";
    }
  
    return resultado;
  }
  
  function atualizarSomaEClassificacao() {
    const fc = parseInt(document.getElementById("fcLinha").value) || 0;
    const cf = parseInt(document.getElementById("cLinhaF").value) || 0;
    const c = parseInt(document.getElementById("cLinha").value) || 0;
  
    const soma = fc + cf + c;
    document.getElementById("somaFCLinha").innerText = soma;
  
    const classificacao = classificarFCLinha(soma);
    document.getElementById("classificacaoFCLinha").innerText = classificacao;
  }
  
  // Dispara a função sempre que um valor for alterado
  document.querySelectorAll("#fcLinha, #cLinhaF, #cLinha, #sexo, #escolaridade, #atividade, #aplicacao")
    .forEach(el => el.addEventListener("input", atualizarSomaEClassificacao));
  