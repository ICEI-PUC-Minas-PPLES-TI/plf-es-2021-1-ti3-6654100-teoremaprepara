import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Curso {
  name: String;
  id: String;
}

@Component({
  selector: 'app-adicionar-resultados',
  templateUrl: './adicionar-resultados.component.html',
  styleUrls: ['./adicionar-resultados.component.scss']
})
export class AdicionarResultadosComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<AdicionarResultadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  initForm(){
    this.form = this._formBuilder.group({
      nome : [null],
      descricao: [null],
   })}
   close(){
    this.dialogRef.close();
    
   }

}
