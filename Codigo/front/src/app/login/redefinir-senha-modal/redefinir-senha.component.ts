import { EnviarEmailService } from './../../services/enviar-email.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})

export class RedefinirSenhaComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RedefinirSenhaComponent>,
    private _service: EnviarEmailService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.initForm();

  }

  initForm() {
    this.form = this._formBuilder.group({
      email: [null]
    })
  }

  enviarEmail() {

    let emailAddress = this.form.get("email")?.value

    let email: any = {
      emailAddress: emailAddress
    }

    const emailJSON = JSON.stringify(email);
    this._service.enviarEmail(emailJSON);
  }

  confirmar(): void {
    this.dialogRef.close();
  }

  sair(): void {
    this.dialogRef.close();
  }

}
