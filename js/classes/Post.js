import { posts } from "../data.js";

export class Post {

    constructor() {
        this.container = document.getElementById('posts-container');
        this.post = this.#buscarPostDaUrl();

        if (this.post) {
            this.#inicializarPropriedades();
        }
    }
        
    /** 
    * Busca o id da url e retorna o post correspondente
    * @private
    * @returns {Object|null} Post encontrado ou null
    */
    #buscarPostDaUrl() {
        // Pegar o ID da URL
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));

        if (isNaN(postId)) {
        return null;
        }
        return posts.find(post => post.id === postId) || null;
    }

    /**
    * inicializa as propriedades do post
    * @private
    */
    #inicializarPropriedades() { 
        this.id = this.post.id;
        this.autor = this.post.autor;
        this.titulo = this.post.titulo;
        this.content = this.post.conteudo;
        this.date = this.post.data;
    }

    /** 
    * redenriza o post da pagina
    * @public
    */
    rederizar() {
        if (!this.container) {
            console.log('Container nao encontrado');
            return;
        }

        this.container.innerHTML = this.post
        ? this.#templatePost()
        : this.#templateErro();
    }

    /** 
    * template html do post
    * @private
    * returns {string} HTML DO POST
    */
    #templatePost() {
    return `
        <article class="posts">
        <h2>${this.#escaparHTML(this.titulo)}</h2>
        <div class="post-meta">
            Por ${this.#escaparHTML(this.autor)} em ${this.#escaparHTML(this.date)}
        </div>
        <div class="post-content">
            <p>${this.#escaparHTML(this.content)}</p>
        </div>
        </article>
    `;
    }

    /**
     * template html de erro
     * @private
     * @returns {string} html  de erro
     */
    #templateErro () {
        return `
        <div class="post-erro">
        <p>Post nao encontrado</p>
        </div>
        `;
    }

    /**
     * Escapar HTML para prevenir XSS
     * @private
     * @param {string} texto - texto a ser  escapado
     * @returns {string} texto escapado
     */
    #escaparHTML(texto) {
        const div =  document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }
}