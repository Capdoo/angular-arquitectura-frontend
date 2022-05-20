import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Evaluacion} from '../interfaces/evaluacion-interface';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  evaluacionURL = 'http://localhost:8090/evaluacion/';

  constructor(private httpClient: HttpClient) { }


  public evaluar(formData: FormData ): Observable<Evaluacion>{

    return this.httpClient.post<Evaluacion>(this.evaluacionURL+'iniciar',formData);
  }


}
