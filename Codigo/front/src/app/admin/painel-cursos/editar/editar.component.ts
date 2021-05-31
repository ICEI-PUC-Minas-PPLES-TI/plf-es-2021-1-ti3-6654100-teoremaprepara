import { Component, Inject, OnInit } from '@angular/core';
import { PainelCursosService } from '../../services/painel-cursos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Disciplina {
  name: string;
}

export interface Curso {
  name: string;
  descricao: string;
  id: string;
  disciplina: [];
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  disciplina: Disciplina[] = [
    
  ];
  
  constructor(
    private _formBuilder: FormBuilder,
    private _service: PainelCursosService,
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.data)
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.disciplina.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(disciplina: Disciplina): void {
    const index = this.disciplina.indexOf(disciplina);

    if (index >= 0) {
      this.disciplina.splice(index, 1);
    }
  }
  
  initForm(){
    this.form = this._formBuilder.group({
      nome : [this.data.name],
      descricao: [this.data.descricao],
      disciplinas: [this.disciplinas()],
   })}

   disciplinas(): any{
     let tam = this.data.disciplina.length;
     let aux: any [] = [];
     for(let i = 0; i<tam; i++){
       aux.push(this.data.disciplina[i]);
      
     }
    if(aux){
       for(let x = 0; x<aux.length; x++){
        this.disciplina.push({name: aux[x].nome.trim()})
       }
    }
    console.log(this.disciplina)
    return this.disciplina;
   }

   verificarCampos(){
    let role = this.form.get("tipoCurso")?.value;
    if(role =="professor"){
      return true;
    }
    return false;
   }
   
   editarCurso(){

    let nome = this.form.get("nome")?.value;
    let descricao = this.form.get("descricao")?.value;
    let disciplina = this.disciplina;

    let curso: any = {
      nome: nome,
      descricao: descricao,
      disciplina: disciplina

    }
    //converter o objeto para JSON
    const cursoJSON = JSON.stringify(curso);
    //Chamar a função cadastrar
    console.log(curso);
    let idInt = parseInt(this.data.id);
    this._service.editar(idInt,cursoJSON);

    this.close();

   }

   close(){
    this.dialogRef.close();
    
   }

}
