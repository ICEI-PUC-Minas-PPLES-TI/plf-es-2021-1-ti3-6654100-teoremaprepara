import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../editar/editar.component';

@Component({
  selector: 'app-adicionar-simulado',
  templateUrl: './adicionar-simulado.component.html',
  styleUrls: ['./adicionar-simulado.component.scss']
})
export class AdicionarSimuladoComponent implements OnInit {

  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AdicionarSimuladoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
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
