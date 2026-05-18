import baralhos from "../baseDeDados/baralhos.js";

let proximoId = 1;

// Criar baralho
export function criarBaralho(req, res) {

    const { titulo, descricao } = req.body;

    // validação
    if (!titulo || !descricao) {
        return res.status(400).send({
            message: "Título e descrição são obrigatórios."
        });
    }

    const novoBaralho = {
        id: proximoId,
        titulo,
        descricao
    };

    proximoId++;

    baralhos.push(novoBaralho);

    res.status(201).send({
        message: "Baralho criado com sucesso!",
        baralho: novoBaralho
    });
}

// Listar baralhos
export function listarBaralhos(req, res) {

    res.status(200).send(baralhos);

}

export function buscarBaralhoPorId(req, res) {

    const id = parseInt(req.params.id);

    const baralho = baralhos.find(
        (baralho) => baralho.id === id
    );

    if (!baralho) {
        return res.status(404).send({
            message: "Baralho não encontrado."
        });
    }

    res.status(200).send(baralho);

}

// Atualizar baralhos
export function atualizarBaralho(req, res) {

    const id = parseInt(req.params.id);

    const { titulo, descricao } = req.body;

    const baralho = baralhos.find(
        (baralho) => baralho.id === id
    );

    // verificar se existe
    if (!baralho) {
        return res.status(404).send({
            message: "Baralho não encontrado."
        });
    }

    // atualizar apenas campos enviados
    if (titulo) {
        baralho.titulo = titulo;
    }

    if (descricao) {
        baralho.descricao = descricao;
    }

    res.status(200).send({
        message: "Baralho atualizado com sucesso!",
        baralho
    });

}

// Deletar baralhos
export function deletarBaralho(req, res) {

    const id = parseInt(req.params.id);

    const indiceBaralho = baralhos.findIndex(
        (baralho) => baralho.id === id
    );

    // verificar se existe
    if (indiceBaralho === -1) {
        return res.status(404).send({
            message: "Baralho não encontrado."
        });
    }

    // remover do array
    baralhos.splice(indiceBaralho, 1);

    res.status(200).send({
        message: "Baralho deletado com sucesso!"
    });

}