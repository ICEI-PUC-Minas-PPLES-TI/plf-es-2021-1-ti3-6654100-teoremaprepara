import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PainelSimuladosService {

  constructor(private http: HttpClient,) { }
  url = 'https://teorema-prepara.herokuapp.com/api/v1/';
  

  getCurso(): Observable<any> {
    return this.http.get(`${this.url}curso`).pipe();
  }

  getSimuladoByCurso(id: any): Observable<any> {
    return this.http.get(`${this.url}simulado?curso=${id}`).pipe();
  }
  
  inserirNotas(curso: any) {

    this.http.post(`${this.url}resultado/inserir-por-arquivo`, curso).subscribe(
      (result) => {
        console.log("sucesso");
      },
      result => {
        console.log(result)
        switch (result.status) {
          case 401:
            console.log("401")
            break;
          case 400:
            console.log("400")
            break;
        }
      }
    );
  }

}
