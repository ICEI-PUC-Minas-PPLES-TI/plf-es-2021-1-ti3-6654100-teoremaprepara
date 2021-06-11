import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PainelUsuariosService } from '../../services/painel-usuarios.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  selectedValue: string;
  cursos: any;
  disciplinas: any;
  user: any;
  verificarForm = false;
  public tel = ['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public rg = [/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
  


  constructor(
    private _service: PainelUsuariosService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  ngOnInit(): void {
    this.getCurso();
    this.initForm(this.data);
  } 

  initForm(id: string) { 
    

    this._service.getUserId(id).subscribe(data=>{
      
      this.user = data;
      this.form = this._formBuilder.group({
        nome : [data.fullName, Validators.required],
        data: [data.dataNascimento, Validators.required],
        telefone: [data.telefone, Validators.required],
        rg: [data.rg, Validators.required],
        email: [data.emailAddress, Validators.required]
     })
     this.verificarForm = true;
     this.preencherDados(this.user);
      
    });
  }

  exibirForm(){
    return this.verificarForm ;
  }
 

  editarUser() {
    
    let emailAddress = this.form.get("email")?.value;
    let password = "teorema";
    let fullName = this.form.get("nome")?.value;
    let rg = this.form.get("rg")?.value;
    let telefone =  this.form.get("telefone")?.value; 
    let dataNascimento = this.form.get("data")?.value;
    let role = this.form.get("tipoUser")?.value;
    
    let user:any = {
      emailAddress: emailAddress,
      password: password,
      fullName: fullName,
      telefone: telefone,
      rg: rg,
      dataNascimento: dataNascimento,
      role: role,  
    };
    const userJSON = JSON.stringify(user);
    this._service.editar(this.data, userJSON);
    this.close();
  }

  verificarPreenchimento(){
    let emailAddress = this.form.get("email")?.value;
    let fullName = this.form.get("nome")?.value;
    let rg = this.form.get("rg")?.value;
    let telefone =  this.form.get("telefone")?.value; 
    let dataNascimento = this.datePipe.transform(this.form.get("data")?.value,'dd-MM-yyyy');
    
    if(emailAddress && fullName && rg && telefone && dataNascimento){
      return true;
    }
    return false;
   }


  verificarCampos(){
    
    if(this.user.role =="professor"){
      return true;
    }
    return false;
   }

  getDisciplina(idCurso: string, idDisciplina: string){
    let result: any;
    return this._service.getDisciplina(idCurso).then(async (retorno: any) =>{
     if(retorno){
       for(let disciplina of retorno.disciplinas){
         if(disciplina.id == idDisciplina){
          result = ' '+disciplina.nome+' | '+retorno.nome+';  ';
         }
       }
       if(this.disciplinas != undefined){
        this.disciplinas = result.concat(this.disciplinas);
       } else{
         this.disciplinas = result;
       }
     }})
  }

  getCurso(){
    this._service.getCurso().subscribe(data => {
      this.cursos = data;
   })
  }

preencherDados(data:any) {
  if(data.role == "professor") {
    data.disciplinas.forEach((element: { id: any; curso: any}) => {
      this.getDisciplina(element.curso, element.id);      
    });
  }
}


  close() {
    this.dialogRef.close();
  }



}
