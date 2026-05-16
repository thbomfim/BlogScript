//importar a const post do arquivo data.js
import { Post } from './classes/Post.js';
import { posts } from './data.js';


//function para renderizar os posts
function renderizarPosts() {
    const container = document.getElementById('posts-container');

    //limpar o container
    container.innerHTML = '';
    
    let acumuladorHtml = '';

    let i = 0

    while (i < posts.length) {
        acumuladorHtml += `
        <article class="post">
        <a href="post.html?id=${posts[i].id}"><h2>${posts[i].titulo}</h2></a>
        <div class="post-meta">
        Por ${posts[i].autor} em ${posts[i].data}
        </div>
        <div class="post-content">
        <p>${posts[i].conteudo.slice(0, 150) + '...'}</p>
        </div>
        </article>`;
        i++
    }
    container.innerHTML = acumuladorHtml;
}

//chama a funcao quando a pagina carregar

renderizarPosts();