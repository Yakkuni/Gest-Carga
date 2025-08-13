export class CreateEntrega {
    
    constructor(EntregaRepository) {
        this.entregaRepository = EntregaRepository;
    }

    async execute(entrega){
        return await this.entregaRepository.create(data);
    }
}