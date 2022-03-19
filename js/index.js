//geral - 1 O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');
// console.log(header[0]);

header[0].style.backgroundColor = '#2E948A';

// 2- No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
// console.log(linkCursos);
linkCursos.setAttribute('href','cursos.html');

//cursos - 2 Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
document.querySelector('.titulo.depoimento h3').innerHTML = 'O que falam sobre nós';
// console.log(tituloDepoimento);
// tituloDepoimento.innerHTML = 'O que falam sobre nós'

//3- No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
let menu = document.querySelector('#introducao') //.style.justifyContent = 'space-around';
menu.style.justifyContent = 'space-around';
// console.log(menu);

//4 - Na etapa de blog, o título deveria ser "Mais conteúdo pra você"
document.querySelectorAll('.titulo h3').innerHTML = 'Mais conteúdo pra você"';
let titulos = document.querySelector('.titulo').innerHTML.toLowerCase();
titulos.forEach(titulo => {
    titulo.style.textTransform = upperCase;
});

// //5 - o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
// let linkPosts = document.querySelector('#todos_posts')
// linkPosts.setAttribute('href','blog.html');
// console.log(linkPosts);


// //6 - Adicionar um novo curso na section que contém o id investimentos_poupando_independencia

// let novoCurso = document.getElementById('investimentos_poupando_independencia');

// let novaDiv = `<div id="independencia">
// <img src="/imagens/independencia_financeira.png"
// width="180px" alt="Independência Financeira">
// <h2>Independência Financeira</h2>
// <p>Duis aute irure dolor in reprehenderit in voluptate
// velit esse cillum dolore
// eu fugiat nulla pariatur. </p>
// <a class="comecar_agora" href="./curso.html">começar
// agora</a>
// </div>`

// novoCurso.innerHTML += novaDiv;


