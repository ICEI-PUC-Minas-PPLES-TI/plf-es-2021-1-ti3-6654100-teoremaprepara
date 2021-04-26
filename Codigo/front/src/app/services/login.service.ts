import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://teorema-prepara.herokuapp.com';
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  login(user:any){
    
    this.http.put(`${ this.url }/api/v1/entrance/login`, user)
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
}



