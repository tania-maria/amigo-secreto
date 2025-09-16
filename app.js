//O principal objetivo deste desafio é fortalecer suas habilidades 
// em lógica de programação. Aqui você deverá desenvolver a lógica para
//  resolver o problema.
//Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
//Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
//Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
//Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
let amigos = [];

function adicionarAmigo() {
  var input = document.getElementById("amigo");
  var nome = input.value.trim();

  // Validação: campo vazio
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adiciona o nome no array
  amigos.push(nome);

  // Limpa o campo
  input.value = "";

  // Atualiza a lista visual
  atualizarLista();
}
function atualizarLista() {
  var lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpa a lista

  // Percorre todos os amigos no array e cria <li>
  for (var i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo disponível para sortear.");
    return;
  }

  // Gera um índice aleatório
  var indice = Math.floor(Math.random() * amigos.length);

  // Pega o nome sorteado
  var sorteado = amigos[indice];

  // Mostra o resultado
  document.getElementById("resultado").innerHTML =
    "Amigo sorteado: <strong>" + sorteado + "</strong>";
}

