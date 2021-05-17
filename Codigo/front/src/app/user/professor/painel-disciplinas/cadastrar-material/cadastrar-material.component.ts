import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PainelDisciplinasService } from 'src/app/user/services/painel-disciplinas.service';

export interface Disciplina {
  id: string;
  name: string;
  curso: string;
  professor: string;
}

@Component({
  selector: 'app-cadastrar-material',
  templateUrl: './cadastrar-material.component.html',
  styleUrls: ['./cadastrar-material.component.scss']
})
export class CadastrarMaterialComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _service: PainelDisciplinasService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CadastrarMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Disciplina,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.form = this._formBuilder.group({
      titulo : [null],
      conteudo: [null],
      tipo: [null],
      url: [null],

   })}
   cadastrar(){
    let titulo= this.form.get("titulo")?.value;
    let tipo= this.form.get("tipo")?.value;
    let url= this.form.get("url")?.value;

    let aviso: any={
      titulo: titulo,
      tipo: tipo,
      disciplina: parseInt(this.data.id),
      data: "17/05/2021",
      url: url,
    }
    const avisoJSON = JSON.stringify(aviso);
    this._service.cadastrarMaterial(avisoJSON);
    this.close();
    location.reload();
  }

   close(){
    this.dialogRef.close();
   }
}
