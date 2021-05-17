import { Disciplina } from './../painel-cursos/editar/editar.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PainelUsuariosService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone,
    private location: Location
  ) { }
  url = 'https://teorema-prepara.herokuapp.com/api/v1/';


  getCurso(): Observable<any> {
    return this.http.get(`${this.url}curso`).pipe();
  }
  getDisciplinas(id: String): Observable<any>{
    return this.http.get<any>(`${this.url}curso/${id}`).pipe();
  }
  async getDisciplina(id: String): Promise<any> {

    return this.http.get<any>(`${this.url}curso/${id}`).toPromise();
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.url}user`).pipe();
  }

  getUserId(id: String): Observable<any>{
    return this.http.get(`${this.url}user/${id}`).pipe();
  }
  
  delete(id: String) {
    this.http.delete(`${this.url}user/${id}`).subscribe(
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
  cadastrar(user: any) {

    this.http.post(`${this.url}entrance/signup`, user).subscribe(
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

  editar(id: any, user: any) {

    this.http.patch(`${this.url}user/${id}`, user).subscribe(
      success => {
        console.log("SUCESSO");
        location.reload();
      },
      error => {
        console.log("ERROR")
      }
    );
  }
  redirecionar() {
    this.ngZone.run(() => this.router.navigate(['/adm/usuarios'])).then();
  }
}
