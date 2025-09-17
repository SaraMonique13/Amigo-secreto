let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");

  if (input.value === "") {
    alert("Por favor, digite um nome.");
    return;
  }

  amigos.push(input.value);
  input.value = "";

  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos"); // <-- agora está certo
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let amigoSorteado = Math.floor(Math.random() * amigos.length);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo sorteado foi: <strong>${amigos[amigoSorteado]}</strong>`;
}