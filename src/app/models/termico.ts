export class Termico {

    id?: number;
    envolvente1 : number = 0.0;
    envolvente2 : number = 0.0;
    envolvente3 : number = 0.0;
    envolvente4 : number = 0.0;

    constructor(envolvente1: number, envolvente2: number, envolvente3: number, envolvente4: number){
        this.envolvente1 = envolvente1;
        this.envolvente2 = envolvente2;
        this.envolvente3 = envolvente3;
        this.envolvente4 = envolvente4;
    }

}
