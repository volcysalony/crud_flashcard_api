# 📚 API CRUD de Flashcards

API REST desenvolvida com Node.js e Express para gerenciamento de baralhos e flashcards.

O projeto permite criar, listar, atualizar e deletar baralhos e flashcards, simulando um sistema de estudos semelhante ao Anki ou Quizlet.

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript
- Postman
- Git & GitHub

---

# 📁 Estrutura do Projeto

```bash
crud_flashcard_api/
│
├── baseDeDados/
│   ├── baralho.js
│   └── flashcard.js
│
├── controllers/
│   ├── baralhoController.js
│   └── flashcardController.js
│
├── rotas/
│   ├── baralhoRoutes.js
│   └── flashcardRoutes.js
│
├── index.js
```

---

# ⚙️ Funcionalidades

## 📘 Baralhos

- ✅ Criar baralho
- ✅ Listar todos os baralhos
- ✅ Buscar baralho por ID
- ✅ Atualizar baralho
- ✅ Deletar baralho

## 🃏 Flashcards

- ✅ Criar flashcard
- ✅ Listar todos os flashcards
- ✅ Buscar flashcard por ID
- ✅ Atualizar flashcard
- ✅ Deletar flashcard
- ✅ Listar flashcards por baralho

---

# 🔗 Rotas da API

## 📘 Baralhos

| Método | Rota | Descrição |
|---|---|---|
| POST | `/baralhos` | Criar baralho |
| GET | `/baralhos` | Listar baralhos |
| GET | `/baralhos/:id` | Buscar por ID |
| PUT | `/baralhos/:id` | Atualizar baralho |
| DELETE | `/baralhos/:id` | Deletar baralho |

---

## 🃏 Flashcards

| Método | Rota | Descrição |
|---|---|---|
| POST | `/flashcards` | Criar flashcard |
| GET | `/flashcards` | Listar flashcards |
| GET | `/flashcards/:id` | Buscar por ID |
| PUT | `/flashcards/:id` | Atualizar flashcard |
| DELETE | `/flashcards/:id` | Deletar flashcard |
| GET | `/baralhos/:baralhoId/flashcards` | Listar flashcards de um baralho |

---

# ▶️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2️⃣ Entrar na pasta

```bash
cd crud_flashcard_api
```

---

## 3️⃣ Instalar dependências

```bash
npm install
```

---

## 4️⃣ Iniciar servidor

```bash
node index.js
```

Servidor rodando em:

```bash
http://localhost:3000
```

---

# 🧪 Testes

Os testes da API foram realizados utilizando:

- Postman

---

# 📌 Status do Projeto

✅ Projeto concluído  
✅ CRUD completo  
✅ API REST funcional  
✅ Organização em camadas  
✅ Relacionamento entre entidades

---

# 👨‍💻 Autor

Desenvolvido por Volcy Salony.