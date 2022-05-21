import { Component, OnInit } from '@angular/core';
import { Evaluacion } from '../../interfaces/evaluacion-interface';

@Component({
  selector: 'app-termico',
  templateUrl: './termico.component.html',
  styleUrls: ['./termico.component.css']
})
export class TermicoComponent implements OnInit {

  constructor() { }

  evaluacion: Evaluacion;

  envolvente1: number;
  envolvente2: number;
  envolvente3: number;
  envolvente4: number;

  ngOnInit(): void {

    this.evaluacion = JSON.parse(localStorage.getItem('ultimaEvaluacion'));

    console.log("Solo es una prueba");
    this.envolvente1 = this.evaluacion.evaluacionTermico.envolvente1;
    this.envolvente2 = this.evaluacion.evaluacionTermico.envolvente2;
    this.envolvente3 = this.evaluacion.evaluacionTermico.envolvente3;
    this.envolvente4 = this.evaluacion.evaluacionTermico.envolvente4;

    console.log("DENTRO DE TERMICO COMPONENT");
    console.log(this.evaluacion);
  }



}
