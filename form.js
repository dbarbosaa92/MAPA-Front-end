document.getElementById("contatoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const erroMsg = document.getElementById("mensagemErro");
  const sucessoMsg = document.getElementById("mensagemSucesso");

  erroMsg.textContent = "";
  sucessoMsg.textContent = "";

  if (nome === "") {
    erroMsg.textContent = "Por favor, preencha o nome.";
    return;
  }

  if (!validarEmail(email)) {
    erroMsg.textContent = "Por favor, insira um e-mail válido.";
    return;
  }

  if (mensagem.length < 10) {
    erroMsg.textContent = "A mensagem deve conter ao menos 10 caracteres.";
    return;
  }

  sucessoMsg.textContent = "Mensagem enviada com sucesso!";
  // Aqui você poderia enviar os dados para um servidor com fetch/AJAX, etc.
});

function validarEmail(email) {
  // Expressão regular simples para validação de e-mail
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
