import { conectaAPI } from './conectaAPI.js';
const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
	evento.preventDefault();

	const titulo = document.querySelector('[data-titulo]').value;
	const url = document.querySelector('[data-url]').value;
	const imagem = document.querySelector('[data-imagem]').value;
	const descricao = Math.floor(Math.random() * 10).toString();

	await conectaAPI.criarVideo(titulo, url, descricao, imagem);
	window.location.href = '../pages/envio-concluido.html';
}

formulario.addEventListener('submit', (evento) => criarVideo(evento));
