// 1. Pegamos os elementos do HTML pelo id
const botaoTema = document.getElementById("botao-tema");
const botaoEstudei = document.getElementById("botao-estudei");
const contador = document.getElementById("contador");

// 2. Tema claro/escuro
// Quando clicar, liga/desliga a classe "escuro" no body
botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  // Guarda a escolha no navegador (localStorage)
  const estaEscuro = document.body.classList.contains("escuro");
  localStorage.setItem("tema", estaEscuro ? "escuro" : "claro");
});

// Ao abrir a página, lembra o tema escolhido da última vez
if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("escuro");
}

// 3. Contador de estudos
// Lê o número salvo (ou começa em 0)
let dias = Number(localStorage.getItem("dias")) || 0;
contador.textContent = dias;

botaoEstudei.addEventListener("click", function () {
  dias = dias + 1;
  contador.textContent = dias;
  localStorage.setItem("dias", dias);
});
