export interface Evaluacion{
    evaluacionTermico: Termico;
    evaluacionLuminico: Luminico;
    evaluacionCondensadores: Condensadores;
}

export interface Termico{
    envolvente1: number;
    envolvente2: number;
    envolvente3: number;
    envolvente4: number;

    isCumple: boolean;
}

export interface Condensadores{
    tsi_muro: number;
    tsi_techo: number;
    tsi_piso: number;
    hr: number;
}

export interface Luminico{
    generico: number;
}