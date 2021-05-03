import { Disciplina } from './../editar/editar.component';
import { PainelCursosService } from './../../services/painel-cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  form: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  constructor(
    private _formBuilder: FormBuilder,
    private _service: PainelCursosService,
    public dialogRef: MatDialogRef<CadastrarComponent>
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  get fruitControls(): FormArray {
    return this.form.controls.fruits as FormArray;
  }
  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.fruitControls.push(this._formBuilder.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(disciplina: string): void {
    const index = this.fruitControls.value.indexOf(disciplina);

    if (index >= 0) {
      this.fruitControls.removeAt(index);
    }
  }

  initForm(){
    this.form = this._formBuilder.group({
      nome : [null],
      descricao: [null],
      fruits: this._formBuilder.array([])
   })}

   cadastrarCurso(){
     let nome = this.form.get("nome")?.value;
     let descricao = this.form.get("descricao")?.value;
     let disciplina = this.form.get("fruits")?.value;
     let curso: any = {
      nome : nome,
      descricao: descricao,
      disciplinas: disciplina
     };
     const userJSON = JSON.stringify(curso);
     this._service.cadastrar(userJSON);
    this.close();
    location.reload();
   }
   close(){
    this.dialogRef.close();
    
   }
}
