import express from "express";

import baralhoRoutes from "./rotas/baralhoRoutes.js";
import flashcardRoutes from "./rotas/flashcardRoutes.js";

const app = express();

const PORT = 3000;

app.use(express.json());

// rota principal
app.get("/", (req, res) => {
    res.send({
        message: "API Flashcards funcionando!"
    });
});

// rotas
app.use(baralhoRoutes);
app.use(flashcardRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});