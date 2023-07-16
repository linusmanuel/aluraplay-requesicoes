import { conectaAPI } from './conectaAPI.js';
import { constroiCard } from './mostrarVideos.js';

const $ = document.querySelector.bind(document);

async function buscaVideo(evento) {
	evento.preventDefault();
	const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
	const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

	const lista = $('[data-lista]');

	while (lista.firstChild) {
		lista.removeChild(lista.firstChild);
	}

	busca.forEach((elemento) => {
		lista.appendChild(
			constroiCard(
				elemento.titulo,
				elemento.descricacao,
				elemento.url,
				elemento.imagem
			)
		);
	});
}

const botaoPesquisar = $('[data-botao-pesquisa]');
botaoPesquisar.addEventListener('click', (evento) => {
	buscaVideo(evento);
});
