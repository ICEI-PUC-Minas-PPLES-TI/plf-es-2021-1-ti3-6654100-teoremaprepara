import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {

    if (this.autenticar()){
      return true;
    }
    this.router.navigate(['']);
    return false;  
  }

  autenticar(){
  return localStorage.getItem('id');
  }
}
