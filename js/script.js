//importar a const post do arquivo data.js
import { posts } from './data.js';

const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const toggleSlider = document.querySelector('.toggle-slider');

        // Carregar tema salvo
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.className = savedTheme;
        updateIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.className = newTheme;
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });

        function updateIcon(theme) {
            toggleSlider.textContent = theme === 'light' ? '☀️' : '🌙';
        }

//function para renderizar os posts
function renderizarPosts() {
    const container = document.getElementById('posts-container');

    //limpar o container
    container.innerHTML = '';

    //para cada post vai criar o html e adcionar o post
    posts.forEach(post => {
        const postHTML = `
        <article class="post">
        <a href="post.html?id=${post.id}"><h2>${post.titulo}</h2></a>
        <div class="post-meta">
        Por ${post.autor} em ${post.data}
        </div>
        <div class="post-content">
        <p>${post.conteudo}</p>
        </div>
        </article>
        `;

        container.innerHTML += postHTML
    });
}

//chama a funcao quando a pagina carregar

renderizarPosts();