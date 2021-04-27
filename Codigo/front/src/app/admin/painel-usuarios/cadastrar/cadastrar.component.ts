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

  public tel = ['(', /[1-9]/, /\d/, ')',/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public rg = [/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]

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
    // recebendo os dados do form
    let emailAddress = this.form.get("email")?.value;
    let password = "teorema";
    let fullName = this.form.get("nome")?.value;
    let rg = this.form.get("rg")?.value;
    let telefone =  this.form.get("telefone")?.value;
    let dataNascimento = this.form.get("data")?.value;
    let role = this.form.get("tipoUser")?.value;
    let curso;
    let disciplina;
    // montando o objeto com os nomes que tem no banco
    let user:any = {
      emailAddress: emailAddress,
      password: password,
      fullName: fullName,
      telefone: telefone,
      rg: rg,
      dataNascimento: dataNascimento,
      role: role      
    };
    // Verificar se a dissiplina ou o curso foi selecionando e converter para int
    if(this.verificarCampos()){
      disciplina = parseInt(this.form.get("disciplina")?.value);
      user.disciplina = disciplina;
    } else{
        curso= parseInt(this.form.get("curso")?.value);
        user.curso = curso;
    }
    //converter o objeto para JSON
    const userJSON = JSON.stringify(user);
    //Chamar a função cadastrar
    this._service.cadastrar(userJSON);
    this.close();
  }



  close(){
    this.dialogRef.close();
    location.reload();
   }
}
