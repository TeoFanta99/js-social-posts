/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array di oggetti che già trovate.

Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone (FATTO) e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// SELEZIONO elementi nel DOM
const postContainer = document.getElementById("container");



// GENERARE in maniera dinamica il template literal utilizzando il ciclo for
for (let i = 0; i < posts.length; i++) {
    const post = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${posts[i].author.image} alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[i].author.name}</div>
                    <div class="post-meta__time">${posts[i].created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts[i].content}</div>
        <div class="post__image">
            <img src="${posts[i].media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `
    postContainer.innerHTML += post
};


const likeButtons = document.querySelectorAll(".like-button");

// aggiungi una serie di eventi al click del "mi piace"
likeButtons.forEach((likeBtn, index) => {

    likeBtn.addEventListener("click", function(element) {

        // evita il refresh della pagina
        element.preventDefault();

        // dichiaro variabile che verifica se l'elemento contiene la classe "liked"
        const isLiked = likeBtn.classList.contains("liked");

        if (isLiked) {
            likeBtn.classList.remove("liked");
        } else {
            likeBtn.classList.add("liked");
        }
    });
});