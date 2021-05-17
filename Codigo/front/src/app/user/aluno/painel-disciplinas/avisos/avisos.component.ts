import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PainelDisciplinasService } from 'src/app/user/services/painel-disciplinas.service';
import { AvisoComponent } from './aviso/aviso.component';
import { MatTableDataSource } from '@angular/material/table';

export interface DisciplinaData {
  id: string;
}
export interface Aviso {
  titulo: string;
  assunto: string;
  professor: string;
}

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {

  displayedColumns: string[] = ['id'];
  dataSource: MatTableDataSource<DisciplinaData>;
  aviso: Aviso
  constructor(
    private _service: PainelDisciplinasService,
    public dialogRef: MatDialogRef<AvisosComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
    this.getAvisos(this.data)
  }
  openAviso(id: string){
    this._service.getAviso(id).subscribe(data=>{
      this.aviso = {
        titulo: data.titulo,
        assunto: data.assunto,
        professor: data.professor.fullName,
      }
      const MatDialogRef = this.dialog.open(AvisoComponent,{data: this.aviso});
    });
    
  }

  getAvisos(id: string){
    this._service.getAvisoDisciplina(id).subscribe(data => {
      //let result = data.disciplinas;
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
      
      }
    );
  }
  close(){
    this.dialogRef.close();
   }
}
