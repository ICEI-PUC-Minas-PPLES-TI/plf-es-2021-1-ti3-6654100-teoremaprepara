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
  descricao: String;
  id: String;
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
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
    this.initForm();
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
      nome : [null],
      descricao: [null],
      disciplinas: [null]
   })}

   

   close(){
    this.dialogRef.close();
    
   }

}
