import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CursoData } from 'src/app/admin/painel-cursos/painel-cursos.component';
import { PainelDisciplinasService } from './services/painel-disciplinas.service';

@Component({
  selector: 'app-painel-disciplinas',
  templateUrl: './painel-disciplinas.component.html',
  styleUrls: ['./painel-disciplinas.component.scss']
})
export class PainelDisciplinasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress'];
  dataSource: MatTableDataSource<CursoData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private _service: PainelDisciplinasService
  ) { }

  ngOnInit(): void {
  }
  

}
