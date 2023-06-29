const formulario = document.querySelector('[data-formulario]');

function criarVideo(evento) {
	evento.preventDefault();

	const titulo = document.querySelector('[data-titulo]').value;
	const url = document.querySelector('[data-url]').value;
	const descricao = document.querySelector('[data-descricao]').value;
	const imagem = document.querySelector('[data-imagem]');
}

formulario.addEventListener('submit', (evento) => criarVideo(evento));
