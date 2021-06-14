import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PainelDisciplinasService {

  constructor(
    private http: HttpClient,
  ) { }
  url = 'https://teorema-prepara.herokuapp.com/api/v1/';

  getUserId(id: String): Observable<any>{
    return this.http.get(`${this.url}user/${id}`).pipe();
  }
  getDisciplinaId(id: String): Observable<any>{
    return this.http.get(`${this.url}disciplina/${id}`).pipe();
  }
  getCursoId(id: String): Observable<any>{
    return this.http.get(`${this.url}curso/${id}`).pipe();
  }
  getAvisoDisciplina(id: String): Observable<any>{
    return this.http.get(`${this.url}avisos?disciplina=${id}`).pipe();
  }
  getAviso(id: String): Observable<any>{
    return this.http.get(`${this.url}avisos/${id}`).pipe();
  }
  getMateriaisDisciplina(id: String): Observable<any>{
    return this.http.get(`${this.url}material?disciplina=${id}`).pipe();
  }
  getMaterial(id: String): Observable<any>{
    return this.http.get(`${this.url}material/${id}`).pipe();
  }
  cadastrarAviso(aviso: any) {
    this.http.post(`${this.url}avisos`, aviso).subscribe(
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
  cadastrarMaterial(material: any) {
    this.http.post(`${this.url}material`, material).subscribe(
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
