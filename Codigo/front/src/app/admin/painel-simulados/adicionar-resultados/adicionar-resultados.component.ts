import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { PainelSimuladosService } from '../../services/painel-simulados.service';

export interface Simulado {
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
  resultadoSimulado: [][];
  nomeArquivoSelecionado: string = "";
  constructor(
    private _service: PainelSimuladosService,
    public dialogRef: MatDialogRef<AdicionarResultadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Simulado,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any){
    const arquivo: DataTransfer = <DataTransfer>(event.target);
    
    if (arquivo.files.length !== 1) throw new Error('Multiplo arquivo')
    const reader: FileReader = new FileReader();
    this.nomeArquivoSelecionado = event.target.files[0].name;

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.resultadoSimulado = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

    };

    reader.readAsBinaryString(arquivo.files[0]);
  }

  confirmar(){
    console.log(this.resultadoSimulado);
    let simulado = {
      simulado: this.data.id,
      tabela: this.resultadoSimulado
    }
    const userJSON = JSON.stringify(simulado);
    console.log(userJSON)
    this._service.inserirNotas(userJSON);
    this.close();
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
