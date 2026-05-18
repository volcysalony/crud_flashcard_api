import express from "express";

import {
    criarBaralho,
    listarBaralhos,
    buscarBaralhoPorId,
    atualizarBaralho,
    deletarBaralho
} from "../controllers/baralhoController.js";

const router = express.Router();

router.post("/baralhos", criarBaralho);

router.get("/baralhos", listarBaralhos);

router.get("/baralhos/:id", buscarBaralhoPorId);

router.put("/baralhos/:id", atualizarBaralho);

router.delete("/baralhos/:id", deletarBaralho);

export default router;