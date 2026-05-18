import express from "express";

import {
    criarFlashcard,
    listarFlashcards,
    buscarFlashcardPorId,
    atualizarFlashcard,
    deletarFlashcard,
    listarFlashcardsPorBaralho
} from "../controllers/flashcardController.js";

const router = express.Router();

router.post("/flashcards", criarFlashcard);

router.get("/flashcards", listarFlashcards);

router.get("/flashcards/:id", buscarFlashcardPorId);

router.put("/flashcards/:id", atualizarFlashcard);

router.delete("/flashcards/:id", deletarFlashcard);

router.get(
    "/baralhos/:baralhoId/flashcards",
    listarFlashcardsPorBaralho
);

export default router;