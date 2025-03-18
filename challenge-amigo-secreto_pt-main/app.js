let listaDeAmigos = [];

// Adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    input.value = ""; 
}

// Atualizar a exibição da lista
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Sortear um amigo
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${nomeSorteado}</strong></li>`;
}
