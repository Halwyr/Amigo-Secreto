// Array para guardar nomes de amigos.
let amigos = [];

// Função para mostrar Pop-up.
function mostrarPopup(mensagem) {
    
    document.getElementById('popup-message').textContent = mensagem;

    
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    
    popup.classList.add('show');
    overlay.classList.add('show');
}

// Função para fechar Pop-up.
function fecharPopup() {
    
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    
    popup.classList.remove('show');
    overlay.classList.remove('show');
}

// Função adicionar Nomes.
function adicionar() {

    let amigo = document.getElementById('nome-amigo');

    // Lista não aceita valor vazio.
    if (amigo.value == '') {

        mostrarPopup('É necessário informar um nome.');
        return;
    }

    // Lista não aceita nomes iguais.
    if (amigos.includes(amigo.value)) {

        mostrarPopup('Este nome já está em uso. Insira um nome diferente.');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    // Adicionar os nomes no array.
    amigos.push(amigo.value);

    if (lista.textContent == '') {

        lista.textContent = amigo.value;

    } else {

        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    // Limpar o campo da lista ao adicionar um nome.
    amigo.value = '';
}

reiniciar();

// Função para Sortear.
function sortear() {

    // Lista deve conter mais que 4 nomes.
    if (amigos.length < 4) {

        mostrarPopup('Número mínimo: 4 pessoas.');
        return;
    }

    // Chama a função para misturar os nomes.
    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {

            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {

            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

// Função para misturar os nomes.
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);


        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Função para reiniciar o sorteio.
function reiniciar() {

    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}