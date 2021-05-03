import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class EnviarEmailService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) { }

  url = 'https://teorema-prepara.herokuapp.com/api/v1/'


  enviarEmail(email: any){

    this.http.post(`${this.url}entrance/send-password-recovery-email`,email).subscribe(
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
}


