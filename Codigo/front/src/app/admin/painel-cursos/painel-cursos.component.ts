import { PainelCursosService } from './../services/painel-cursos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DeletarComponent } from './deletar/deletar.component';

export interface CursoData {
  id: string;
  name: string;
  progress: string;
}

@Component({
  selector: 'app-painel-cursos',
  templateUrl: './painel-cursos.component.html',
  styleUrls: ['./painel-cursos.component.scss']
})
export class PainelCursosComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'progress'];
  dataSource: MatTableDataSource<CursoData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private _service: PainelCursosService
  ) { }

  ngOnInit(): void {
    this.getCurso();
  }

  openAdd(){
    const dialogRef = this.dialog.open(CadastrarComponent);
  }

  openDelet(id: String, nome: String) {
    const dialogRef = this.dialog.open(DeletarComponent,{
      data: {
        name: nome,
        id: id
      }
      }      
    );

  }

  getCurso(){
    this._service.getCurso().subscribe(data => {
      const cursos = data;
      this.dataSource = new MatTableDataSource(cursos);
   })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
