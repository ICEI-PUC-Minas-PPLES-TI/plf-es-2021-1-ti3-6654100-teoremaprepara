import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PainelCursosService {
  
  constructor(
    private http: HttpClient,
  ) { }
  url = 'https://teorema-prepara.herokuapp.com/api/v1/';


  getCurso(): Observable<any> {
    return this.http.get(`${this.url}curso`).pipe();
  }

  getCursoId(id: String): Observable<any>{
    return this.http.get(`${this.url}curso/${id}`).pipe();
  }

  cadastrar(curso: any) {

    this.http.post(`${this.url}curso/criar-curso`, curso).subscribe(
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

  editar(id: any, curso: any) {

    this.http.patch(`${this.url}cursos/${id}`, curso).subscribe(
      success => {
        console.log("SUCESSO");
        location.reload();
      },
      error => {
        console.log("ERROR")
      }
    );
  }

  delete(id: String) {
    this.http.delete(`${this.url}curso/${id}`).subscribe(
      success => {
        console.log("SUCESSO");
        location.reload();
      },
      error => {
        console.log("ERROR")
      }
    );
    return false;
  }
}
