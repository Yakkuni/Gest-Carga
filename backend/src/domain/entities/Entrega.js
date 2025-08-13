export class Entrega {
    constructor({ id, destino, status, dataEntrega}) {
        this.id = id;
        this.destino = destino;
        this.status = status;
        this.dataEntrega = dataEntrega;
    }
}