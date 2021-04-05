import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LoginService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this._formBuilder.group({
     email : [null, [Validators.required, Validators.email]],
     senha: [null, Validators.required]
  
   })}

   login(){
     let email = this.form.get("email")?.value;
     let senha = this.form.get("senha")?.value;
     let corpo = {emailAddress: email, password: senha};
     let corpoJson = JSON.stringify(corpo);
     if (this.form.valid){
       this._service.login(corpoJson);
       
     }
   }
   
}
