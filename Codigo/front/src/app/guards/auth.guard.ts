import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {

    // if (this.loginService.autenticar()){
    //   console.log("Entrei");
    //   return true;
    // }
    // this.router.navigate(['']);
    return true;
  }
}
