function enviar(){
    alert ("Enviado com sucesso!")
}

//Essa função server para o botão menu ativar quando o usuario der o click.

const btnMobile = document.getElementById('btn-mobile'); //Pegar o elemento pelo ID / ter acesso ao botão.

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); //togge - Adicionar se for falso e remover se verdadeiro.
}

btnMobile.addEventListener('click', toggleMenu); // adicionar o evento de listas usando o Toggle.