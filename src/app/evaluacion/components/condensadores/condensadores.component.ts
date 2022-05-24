import { Component, OnInit } from '@angular/core';
import { Evaluacion } from '../../interfaces/evaluacion-interface';

@Component({
  selector: 'app-condensadores',
  templateUrl: './condensadores.component.html',
  styleUrls: ['./condensadores.component.css']
})
export class CondensadoresComponent implements OnInit {

  evaluacion: Evaluacion;

  tsi_muro: number;
  tsi_techo: number;
  tsi_piso: number;
  hr: number;

  constructor() { }

  ngOnInit(): void {

    this.evaluacion = JSON.parse(localStorage.getItem('ultimaEvaluacion'));

    console.log("Solo es una prueba 2");
    this.tsi_muro = this.evaluacion.evaluacionCondensadores.tsi_muro;
    this.tsi_techo = this.evaluacion.evaluacionCondensadores.tsi_techo;
    this.tsi_piso = this.evaluacion.evaluacionCondensadores.tsi_piso;
    this.hr = this.evaluacion.evaluacionCondensadores.hr;

    console.log("DENTRO DE TERMICO COMPONENT");
    //console.log(this.evaluacion);
  }




}
