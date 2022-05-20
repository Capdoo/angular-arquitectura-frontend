export interface Evaluacion{
    evaluacionTermico: Termico;
    evaluacionLuminico: Luminico;
}

export interface Termico{
    envolvente1: number;
    envolvente2: number;
    envolvente3: number;
    envolvente4: number;

    isCumple: boolean;
}

export interface Luminico{
    generico: number;
}