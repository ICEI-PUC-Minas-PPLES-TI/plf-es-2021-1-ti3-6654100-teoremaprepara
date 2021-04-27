import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PainelUsuariosService {

  constructor(
    private http:HttpClient,
    private router: Router,
    private ngZone: NgZone,
  ) { }
  url = 'https://teorema-prepara.herokuapp.com/api/v1/';

 
getCurso(): Observable<any> {
  return this.http.get(`${this.url}curso`).pipe();
}
getDisciplina(): Observable<any> {
  return this.http.get(`${this.url}disciplina`).pipe();
}

getUser(): Observable<any> {
  return this.http.get(`${this.url}user`).pipe();
}
delete(id:String){
  return this.http.delete(`${this.url}user/${id}`).subscribe(
    (result) => {
      console.log("sucesso");     
    },
    result => {
      console.log(result)
      switch(result.status) {
        case 401:
          console.log("401")
          break;
      }
    }
  );
}
cadastrar(user: any){

  this.http.post(`${this.url}entrance/signup`,user).subscribe(
    (result) => {
      console.log("sucesso");     
    },
    result => {
      console.log(result)
      switch(result.status) {
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

editar(id: any,user: any){

  this.http.patch(`${this.url}user/${id}`,user).subscribe(
    (result) => {
      console.log("sucesso");     
    },
    result => {
      console.log(result)
      switch(result.status) {
        case 401:
          console.log("401")
        break;
        case 400:
          console.log("400")
        break;
        case 404:
          console.log("404")
        break;
      }
    }
  );
}

}
