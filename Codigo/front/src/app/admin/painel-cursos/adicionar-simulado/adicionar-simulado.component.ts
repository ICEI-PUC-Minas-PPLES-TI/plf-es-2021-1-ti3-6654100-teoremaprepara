import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PainelCursosService } from '../../services/painel-cursos.service';
import { Curso } from '../editar/editar.component';

@Component({
  selector: 'app-adicionar-simulado',
  templateUrl: './adicionar-simulado.component.html',
  styleUrls: ['./adicionar-simulado.component.scss']
})
export class AdicionarSimuladoComponent implements OnInit {

  form: FormGroup;
  constructor(
    private _service: PainelCursosService,
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

   criarSimulado() {
    let nome = this.form.get("nome")?.value;
    let descricao = this.form.get("descricao")?.value;
    let curso: any = {
     nome : nome,
     curso: this.data.id
    };
    const userJSON = JSON.stringify(curso);
    this._service.cadastrarSimulado(userJSON);
   this.close();
  }

   

   close(){
    this.dialogRef.close();
    
   }

}
