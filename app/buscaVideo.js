const $ = document.querySelector.bind(document);

import { conectaAPI } from './conectaAPI.js';

async function buscaVideo(evento) {
	evento.preventDefault();
	const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
	const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

	console.log(busca);
}

const botaoPesquisar = $('[data-botao-pesquisa]');
botaoPesquisar.addEventListener('click', (evento) => {
	buscaVideo(evento);
});
