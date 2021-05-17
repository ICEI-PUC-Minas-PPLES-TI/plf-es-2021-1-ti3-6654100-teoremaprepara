import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PainelDisciplinasService } from 'src/app/user/services/painel-disciplinas.service';

export interface Aviso {
  titulo: string;
  assunto: string;
  professor: string;
}

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss']
})
export class AvisoComponent implements OnInit {

  constructor(
    private _service: PainelDisciplinasService,
    public dialogRef: MatDialogRef<AvisoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Aviso,
  ) { }

  ngOnInit(): void {
  }

  
  close(){
    this.dialogRef.close();
   }
}
