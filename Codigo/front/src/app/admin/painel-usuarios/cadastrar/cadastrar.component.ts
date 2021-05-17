import { Disciplina } from './../../painel-cursos/editar/editar.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PainelUsuariosService } from '../../services/painel-usuarios.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  form: FormGroup;
  
  cursos: any;
  disciplinas: any;
  asd: any;

  public tel = ['(', /[1-9]/, /\d/, ')',/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public rg = [/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]

  constructor(
    private _service: PainelUsuariosService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CadastrarComponent>,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getCurso();
  }
   async addDisciplina(){
    let cursoId = this.form.get("cursoD")?.value;
    
    if(cursoId != null){
      let i;
      let tam = cursoId.length;
      let aux: [];
      if(this.disciplinas != undefined){
        let tam2 = this.disciplinas.length;
        for( i=0; i<tam2; i++){
          this.disciplinas.shift();
        }
      }

      for( i=0; i<tam; i++){
         let result = await this.getDisciplina(cursoId[i]);     

         if(this.disciplinas != undefined){
          this.disciplinas = result.concat(this.disciplinas);
         } else{
           this.disciplinas = result;
         }
      }
    }
    
  };

    

  initForm(){
    this.form = this._formBuilder.group({
      nome : [null],
      data: [null],
      telefone: [null],
      rg: [null],
      email: [null],
      curso: [null],
      disciplinas: [null],
      //turma: [null],
      tipoUser: [null],   
      cursoD: [null]
   })}

  getCurso(){
    this._service.getCurso().subscribe(data => {
      this.cursos = data;
   })
  }


   getDisciplina(id: String){
     return this._service.getDisciplina(id).then(async (retorno: any) =>{
      if(retorno){
        for(let disciplina of retorno.disciplinas){
          disciplina.nome = disciplina.nome+' | '+retorno.nome;
        }
        return retorno.disciplinas;
      }})
   }
   
  



   verificarCampos(){
    let role = this.form.get("tipoUser")?.value;
    if(role =="professor"){
      return true;
    }
    return false;
   }

   verificarPreenchimento(){
    let emailAddress = this.form.get("email")?.value;
    let fullName = this.form.get("nome")?.value;
    let rg = this.form.get("rg")?.value;
    let telefone =  this.form.get("telefone")?.value; 
    let dataNascimento = this.datePipe.transform(this.form.get("data")?.value,'dd-MM-yyyy');
    let role = this.form.get("tipoUser")?.value;
    let curso = this.form.get("curso")?.value;
    let disciplinas = this.form.get("disciplinas")?.value;
    if(emailAddress && fullName && rg && telefone && dataNascimento && role && (curso || disciplinas)){
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
    let dataNascimento = this.datePipe.transform(this.form.get("data")?.value,'dd-MM-yyyy');
    let role = this.form.get("tipoUser")?.value;
    let curso;
    let disciplinas;
    // montando o objeto com os nomes que tem no banco
    let user:any = {
      emailAddress: emailAddress,
      password: password,
      fullName: fullName,
      telefone: telefone,
      rg: rg,
      dataNascimento: dataNascimento,
      role: role,  
    };
    // Verificar se a dissiplina ou o curso foi selecionando e converter para int
    if(this.verificarCampos()){
      disciplinas = this.form.get("disciplinas")?.value;
      user.disciplinas = disciplinas;
    } else{
        curso= parseInt(this.form.get("curso")?.value);
        user.curso = curso;
    }
    //converter o objeto para JSON
    const userJSON = JSON.stringify(user);
    //Chamar a função cadastrar
    
    this._service.cadastrar(userJSON);
    this.close();
    location.reload();
  }



  close(){
    this.dialogRef.close();
   }
}
