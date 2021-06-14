import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PainelDisciplinasService } from 'src/app/user/services/painel-disciplinas.service';
import { MaterialComponent } from './material/material.component';
export interface MateriaisData {
  id: string;
}

export interface Material {
  titulo: string;
  tipo: string;
  url: string;
  professor: string;
}

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['./materiais.component.scss']
})
export class MateriaisComponent implements OnInit {

  displayedColumns: string[] = ['id'];
  dataSource: MatTableDataSource<MateriaisData>;
  material: Material;

  constructor(
    public dialogRef: MatDialogRef<MateriaisComponent>,
    private _service: PainelDisciplinasService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
    this.getMaterial(this.data)
  }

  openMaterial(id: string) {
    this._service.getMaterial(id).subscribe(data => {
      this.material = {
        titulo: data.titulo,
        tipo: data.tipo,
        url: data.url,
        professor: data.professor
      }
      const MatDialogRef = this.dialog.open(MaterialComponent, {data: this.material});
    })
  }

  getMaterial(id: string) {
    this._service.getMateriaisDisciplina(id).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
    })
  }

  close(){
    this.dialogRef.close();
   }

}
