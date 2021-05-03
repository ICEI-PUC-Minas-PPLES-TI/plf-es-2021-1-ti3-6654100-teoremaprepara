import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PainelCursosService } from '../../services/painel-cursos.service';

export interface Curso {
  name: String;
  id: String;
}

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.scss']
})
export class DeletarComponent implements OnInit {

  constructor(
    private _service: PainelCursosService,
    public dialogRef: MatDialogRef<DeletarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) { }

  ngOnInit(): void {
  }

  async deleteCurso(){
    let  result = await this._service.delete(this.data.id);
    this.close();      
    
  }
  close(){
    this.dialogRef.close();
  }
}
