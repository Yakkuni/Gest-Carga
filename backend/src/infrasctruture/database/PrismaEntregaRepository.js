import { PrismaClient } from "@prisma/client";
import { EntregaRespository } from "../../domain/repositories/EntregaRepository";

const prisma = new PrismaClient();

export class PrismaEntregaRepository extends EntregaRespository {

    async create(entrega) {
        return await prisma.entrega.create({ data: entrega });
    }

    async findAll() {
        return await prisma.entrega.findMany();
    }
    
}