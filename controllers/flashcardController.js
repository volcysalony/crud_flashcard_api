import flashcards from "../baseDeDados/flashcards.js";
import baralhos from "../baseDeDados/baralhos.js";

let proximoId = 1;

// CRIAR FLASHCARD
export function criarFlashcard(req, res) {

    const { pergunta, resposta, baralhoId } = req.body;

    // validação
    if (!pergunta || !resposta || !baralhoId) {
        return res.status(400).send({
            message: "Pergunta, resposta e baralhoId são obrigatórios."
        });
    }

    // verificar se baralho existe
    const baralhoExiste = baralhos.find(
        (baralho) => baralho.id === baralhoId
    );

    if (!baralhoExiste) {
        return res.status(404).send({
            message: "Baralho não encontrado."
        });
    }

    const novoFlashcard = {
        id: proximoId,
        pergunta,
        resposta,
        baralhoId
    };

    proximoId++;

    flashcards.push(novoFlashcard);

    res.status(201).send({
        message: "Flashcard criado com sucesso!",
        flashcard: novoFlashcard
    });

}

// LISTAR TODOS
export function listarFlashcards(req, res) {

    res.status(200).send(flashcards);

}

// BUSCAR POR ID
export function buscarFlashcardPorId(req, res) {

    const id = parseInt(req.params.id);

    const flashcard = flashcards.find(
        (flashcard) => flashcard.id === id
    );

    if (!flashcard) {
        return res.status(404).send({
            message: "Flashcard não encontrado."
        });
    }

    res.status(200).send(flashcard);

}

// ATUALIZAR
export function atualizarFlashcard(req, res) {

    const id = parseInt(req.params.id);

    const { pergunta, resposta, baralhoId } = req.body;

    const flashcard = flashcards.find(
        (flashcard) => flashcard.id === id
    );

    if (!flashcard) {
        return res.status(404).send({
            message: "Flashcard não encontrado."
        });
    }

    // validar baralho novo
    if (baralhoId) {

        const baralhoExiste = baralhos.find(
            (baralho) => baralho.id === baralhoId
        );

        if (!baralhoExiste) {
            return res.status(404).send({
                message: "Baralho não encontrado."
            });
        }

        flashcard.baralhoId = baralhoId;
    }

    // atualizar campos
    if (pergunta) {
        flashcard.pergunta = pergunta;
    }

    if (resposta) {
        flashcard.resposta = resposta;
    }

    res.status(200).send({
        message: "Flashcard atualizado com sucesso!",
        flashcard
    });

}

// DELETAR
export function deletarFlashcard(req, res) {

    const id = parseInt(req.params.id);

    const indiceFlashcard = flashcards.findIndex(
        (flashcard) => flashcard.id === id
    );

    if (indiceFlashcard === -1) {
        return res.status(404).send({
            message: "Flashcard não encontrado."
        });
    }

    flashcards.splice(indiceFlashcard, 1);

    res.status(200).send({
        message: "Flashcard deletado com sucesso!"
    });

}

//Listar flashcards por baralho
export function listarFlashcardsPorBaralho(req, res) {

    const baralhoId = parseInt(req.params.baralhoId);

    // verificar se baralho existe
    const baralhoExiste = baralhos.find(
        (baralho) => baralho.id === baralhoId
    );

    if (!baralhoExiste) {
        return res.status(404).send({
            message: "Baralho não encontrado."
        });
    }

    const flashcardsDoBaralho = flashcards.filter(
        (flashcard) => flashcard.baralhoId === baralhoId
    );

    res.status(200).send(flashcardsDoBaralho);

}