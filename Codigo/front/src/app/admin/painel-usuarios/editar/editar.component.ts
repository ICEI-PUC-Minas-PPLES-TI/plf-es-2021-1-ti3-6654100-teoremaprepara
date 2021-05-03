import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { PainelUsuariosService } from '../../services/painel-usuarios.service';


export interface User {
  id: String,
  fullName: String;
  dataNascimento: String;
  telefone: String;
  rg: String;
  emailAddress: String;
  cursoId: String;
  cursoNome: String;
  turma: String;
  role: String;
  disciplinaId: String;
  disciplinaNome: String;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  
  cursoId: string = this.data.cursoId.toString();
  disciplinaId: string = this.data.disciplinaId.toString();
  form: FormGroup;
  selectedValue: string;
  cursos: any;
  disciplinas: any;

  public tel = ['(', /[1-9]/, /\d/, ')',/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public rg = [/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
  
  
  constructor(
    private _service: PainelUsuariosService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
    ) { }

  ngOnInit(): void {
    this.getCurso();
    this.getDisciplina();
    this.initForm();
    this.getUser(this.data.id);
  }
  getCurso(){
    this._service.getCurso().subscribe(data => {
      this.cursos = data;
      
   })
  }
  getDisciplina(){
    this._service.getDisciplina().subscribe(data => {
      this.disciplinas = data;   
   })   
  }

  getUser(id: String){
    this._service.getUserId(id).subscribe(
      user => {
        //console.log("aqui"+user.id);
      }
    )
  }
  
  initForm(){
    const user = this.getUser(this.data.id);
    console.log(user);
    this.form = this._formBuilder.group({
      nome : [this.data.fullName],
      data: [this.data.dataNascimento.trim()],
      telefone: [this.data.telefone],
      rg: [this.data.rg],
      email: [this.data.emailAddress],
      curso: [this.cursoId],
      disciplina: [null],
      tipoUser: [this.data.role],   
   })
   
  }
  verificarCampos(){
    let role = this.form.get("tipoUser")?.value;
    if(role =="professor"){
      return true;
    }
    return false;
   }
   editarUser(){
    let id = this.data.id;
    let emailAddress = this.form.get("email")?.value;
    let fullName = this.form.get("nome")?.value;
    let rg = this.form.get("rg")?.value;
    let dataNascimento = this.form.get("data")?.value;
    let role = this.form.get("tipoUser")?.value;
    let curso;
    let disciplina;

    let user:any = {
      id: id,
      emailAddress: emailAddress,
      fullName: fullName,
      rg: rg,
      dataNascimento: dataNascimento,
      role: role      
    };

    if(this.verificarCampos()){
      disciplina = parseInt(this.form.get("disciplina")?.value);
      user.disciplina = disciplina;
    } else{
        curso= parseInt(this.form.get("curso")?.value);
        user.curso = curso;
    }
    const userJSON = JSON.stringify(user);
    this._service.editar(id, userJSON);
    this.close();
    //location.reload();
  }

   close(){
    this.dialogRef.close();
   }


   
}
