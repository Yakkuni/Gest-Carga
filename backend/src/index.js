import dotenv from "dotenv";
import app from "./interfaces/http/server.js";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
