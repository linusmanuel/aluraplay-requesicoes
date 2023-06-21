import { conectaAPI } from './conectaAPI.js';
const lista = document.querySelector('[data-lista]');

function constroiCard() {
	const video = document.createElement('li');
	video.className('videos__item');
	video.innerHTML = `<iframe width="100%" height="72%" src="https://www.youtube.com/embed/OrnUhR41MYI"
    title="Voltando ao mercado após a maternidade: Ana Silvério" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
    <img src="./img/logo.png" alt="logo canal alura">
    <h3>Voltando ao mercado após a mmaternidade: Ana Silvério</h3>
    <p>618 visualizações</p>
    </div>
  `;

	return video;
}

async function listaVideo() {
	const lista = await conectaAPI.listaVideos();
}
