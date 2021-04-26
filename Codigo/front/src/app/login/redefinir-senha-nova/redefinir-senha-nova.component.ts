import { SenhaNovaService } from './../../services/senha-nova.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-redefinir-senha-nova',
  templateUrl: './redefinir-senha-nova.component.html',
  styleUrls: ['./redefinir-senha-nova.component.scss']
})
export class RedefinirSenhaNovaComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private _service: SenhaNovaService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute) { }
    
  ngOnInit(): void {

    this.initForm();

  }

  initForm() {
    this.form = this._formBuilder.group({
      senha: [null],
      confirmarSenha: [null]
    })
  }

  novaSenha(){

    if(this.form.get("senha")?.value != this.form.get("confirmarSenha")?.value){

      alert("Sua senha precisa ser igual nos dois campos!")
      console.log("Sua senha não deu!")

    } else {

      this.route.queryParamMap.subscribe((params: any) => {

        let password = this.form.get("senha")?.value
  
        let token = params.params.token
  
        console.log(token)
    
        let senha: any ={
          password: password,
          token: token
        }
    
        const senhaJSON = JSON.stringify(senha);
        this._service.senhaNova(senhaJSON);

        console.log(senhaJSON)
    
      })
    }

/*       const tokenJSON = JSON.stringify(token);
      this._service.senhaNova(tokenJSON) */

  }

}
