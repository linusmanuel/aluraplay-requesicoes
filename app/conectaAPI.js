async function listaVideos() {
	const conexao = await fetch('http://localhost:3000/videos');
	const conexaoConvertida = await conexao.json();

	return conexaoConvertida;
}

async function criarVideo(titulo, url, descricao, imagem) {
	const conexao = await fetch('http://localhost:3000/videos', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			titulo: titulo,
			descricao: `${descricao} mil visualizações`,
			url: url,
			imagem: imagem,
		}),
	});

	const conexaoConvertida = await conexao.json();

	return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
	const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
	const conexaoConvertida = await conexao.json();

	return conexaoConvertida;
}

export const conectaAPI = {
	listaVideos,
	criarVideo,
	buscaVideo,
};
