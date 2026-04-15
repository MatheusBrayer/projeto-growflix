import { movies } from './data/movies.js';
import { createMovieCard } from './components/movieCards.js';
import { openVideo } from './services/videoModal.js';

movies.forEach(movie => {
    const container = document.getElementById(movie.category);

    if (!container) return;

    const card = createMovieCard(movie);
    container.appendChild(card);
});

const playVideoHome = document.getElementById('btnPlayVideoHome');

if (playVideoHome) {
    playVideoHome.addEventListener('click', () => {
        openVideo('https://www.youtube.com/watch?v=7OWT3lfHYvE');
    });
}