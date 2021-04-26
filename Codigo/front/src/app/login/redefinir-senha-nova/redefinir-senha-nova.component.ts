import { SenhaNovaService } from './../../services/senha-nova.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-redefinir-senha-nova',
  templateUrl: './redefinir-senha-nova.component.html',
  styleUrls: ['./redefinir-senha-nova.component.scss']
})
export class RedefinirSenhaNovaComponent implements OnInit {

  form: FormGroup;
  route: any;
  
  constructor(
    private _service: SenhaNovaService,
    private _formBuilder: FormBuilder) { }
    
  ngOnInit(): void {

    this.initForm();

  }

  initForm() {
    this.form = this._formBuilder.group({
      senha: [null]
    })
  }

  novaSenha(){

    this.route.queryParamMap.subscribe((params: any) => {

      let password = this.form.get("senha")?.value

      let token = params.token
  
      let senha: any ={
        senha: password,
        token: token
      }
  
      const senhaJSON = JSON.stringify(senha);
      this._service.senhaNova(senhaJSON);
  
      const tokenJSON = JSON.stringify(token);
      this._service.senhaNova(tokenJSON)
    })
  }

}
