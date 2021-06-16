import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PainelSimuladosService {

  constructor(private http: HttpClient) { }

  url = 'https://teorema-prepara.herokuapp.com/api/v1/';
  
  getSimuladoByCurso(id: any): Observable<any> {
    return this.http.get(`${this.url}simulado?curso=${id}`).pipe();
  }

  getResultadoSimuladoByAluno(id: any): Observable<any> {
    return this.http.get(`${this.url}resultado?aluno=${id}`).pipe();
  }
  
}
