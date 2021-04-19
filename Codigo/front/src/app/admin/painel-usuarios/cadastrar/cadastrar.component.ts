import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PainelUsuariosService } from '../../services/painel-usuarios.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  form: FormGroup;
  selectedValue: string;
  selectedValues: string;
  selectedValuex: string;
  cursos: any;
  disciplinas: any;

  constructor(
    private _service: PainelUsuariosService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CadastrarComponent>
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getCurso();
    this.getDisciplina();
  }

  initForm(){
    this.form = this._formBuilder.group({
      nome : [null],
      data: [null],
      telefone: [null],
      rg: [null],
      email: [null],
      curso: [null],
      disciplina: [null],
      //turma: [null],
      tipoUser: [null],   
   })}

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

   verificarCampos(){
    let role = this.form.get("tipoUser")?.value;
    if(role =="professor"){
      return true;
    }
    return false;
   }
  cadastrarUser(){
    let emailAddress = this.form.get("email")?.value;
    let password = "teorema";
    let fullName = this.form.get("nome")?.value;
    let rg = this.form.get("rg")?.value;
    let dataNascimento = this.form.get("data")?.value;
    let role = this.form.get("tipoUser")?.value;
    let curso;
    let disciplina;

    let user:any = {
      emailAddress: emailAddress,
      password: password,
      fullName: fullName,
      rg: rg,
      dataNascimento: "2020-04-19",
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
    this._service.cadastrar(userJSON);
    this.close();
    location.reload();
  }



  close(){
    this.dialogRef.close();
   }
}
