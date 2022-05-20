export class Env1 {

    id?: number;
    transmitancia : number = 0.0;
    transmitanciaPorArea : number = 0.0;
    filename: string = "";

    constructor(transmitancia: number, transmitanciaPorArea: number, filename: string){
        this.transmitancia = transmitancia;
        this.transmitanciaPorArea = transmitanciaPorArea;
        this.filename = filename;
    }

}



