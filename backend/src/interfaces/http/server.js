import express from "express";
import entregaRoutes from "./routes/EntregaRoutes.js";

const app = express();

// Middlewares globais
app.use(express.json());

// Rotas
app.use("/entregas", entregaRoutes);

export default app;
