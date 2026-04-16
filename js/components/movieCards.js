import { openVideo } from '../services/videoModal.js';

export function createMovieCard(movie) {
    const colum = document.createElement('div');
    colum.classList.add('col-12','col-sm-6', 'col-md-4', 'col-xl-3', 'my-0', 'py-3','py-lg-0');

    const card = document.createElement('div');
    card.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = movie.img;
    img.alt = movie.title;
    img.classList.add('img-fluid');

    const overlay = document.createElement('div');
    overlay.classList.add('movie-overlay');

    const btnPlay = document.createElement('i');
    btnPlay.classList.add('bi', 'bi-play-circle', 'fs-1');

    btnPlay.addEventListener('click', () => openVideo(movie.link));

    const title = document.createElement('p');
    title.classList.add('m-0');
    title.textContent = movie.title;

    colum.appendChild(card);
    card.appendChild(img);
    card.appendChild(overlay);
    overlay.appendChild(btnPlay);
    overlay.appendChild(title);

    return colum;
}