import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://teorema-prepara.herokuapp.com';
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router,
    private ngZone: NgZone,
  ) { }

  login(user:any){
    
    this.http.put(`${ this.url }/api/v1/entrance/login`, user)
    .subscribe(
      (result) => {
        this.redirecionar();
      },
      result => {
        console.log(result)
        switch(result.status) {
          case 401:
            this._snackBar.open('Usuario não existente!', ' ', {
              duration: 2500
            });
            break;
        }
      }
    );
    
  }

   envioEmail(user:any){
    
    this.http.put(`${ this.url }/api/v1/entrance/redefiniremail`, user)
    .subscribe(
      () => {},
      result => {
        switch(result.status) {
          case 401:
            this._snackBar.open('Usuario não existente!', ' ', {
              duration: 2500
            });
            break;
          case 200:
            this._snackBar.open('Conectado com sucesso!', ' ', {
              duration: 2500
            });
            break;
        }
      }
    );
    
  }
  redirecionar(){
    this.ngZone.run(() => this.router.navigate(['/adm/usuarios'])).then();
  }
  autenticar(){
    return document.cookie;
  }

}



