import { PainelDisciplinasService } from './../../../services/painel-disciplinas.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Disciplina {
  id: string;
  name: string;
  curso: string;
  professor: string;
}

@Component({
  selector: 'app-cadastrar-avisos',
  templateUrl: './cadastrar-avisos.component.html',
  styleUrls: ['./cadastrar-avisos.component.scss']
})
export class CadastrarAvisosComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _service: PainelDisciplinasService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CadastrarAvisosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Disciplina,
  ) { }

  disciplina = this.data.name;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this._formBuilder.group({
      titulo : [null],
      conteudo: [null],
      //url: [null],

   })}

   cadastrar(){
     let titulo= this.form.get("titulo")?.value;
     let conteudo= this.form.get("conteudo")?.value;

     let aviso: any={
       titulo: titulo,
       assunto: conteudo,
       disciplina: parseInt(this.data.id),
       professor: parseInt(this.data.professor),
     }
     const avisoJSON = JSON.stringify(aviso);
     this._service.cadastrarAviso(avisoJSON);
     this.close();
     location.reload();
   }

  close(){
    this.dialogRef.close();
   }
}
