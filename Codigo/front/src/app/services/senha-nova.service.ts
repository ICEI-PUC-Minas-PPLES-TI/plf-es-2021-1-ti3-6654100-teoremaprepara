import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SenhaNovaService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


url = 'https://teorema-prepara.herokuapp.com/api/v1/'


senhaNova(senha: any){
  
  this.http.post(`${this.url}entrance/update-password-and-login`, senha).subscribe(
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


