import { PrismaEntregaRepository } from "../../../infrasctruture/database/PrismaEntregaRepository";
import { CreateEntrega } from "../../../application/entregas/CreateEntrega";

const entregaRepository = new PrismaEntregaRepository();

export async function createEntrega(req, res){

    try {

        const useCase = new CreateEntrega(entregaRepository);
        const entrega = await useCase.execute(req.body);
        res.status(201).json(entrega);

    } catch (err){
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}