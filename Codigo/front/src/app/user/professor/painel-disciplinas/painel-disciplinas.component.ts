import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PainelDisciplinasService } from '../../services/painel-disciplinas.service';
import { User } from './user';

export interface DisciplinaData {
  id: string;
  name: string;
  progress: string;
}

@Component({
  selector: 'app-painel-disciplinas',
  templateUrl: './painel-disciplinas.component.html',
  styleUrls: ['./painel-disciplinas.component.scss']
})
export class PainelDisciplinasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress'];
  dataSource: MatTableDataSource<DisciplinaData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  user: User;
  constructor(
    public dialog: MatDialog,
    private _service: PainelDisciplinasService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(){
    const id = "103";
    this._service.getUserId(id).subscribe(data => {
        let result = data.disciplinas;
        this.dataSource = new MatTableDataSource(result);
        console.log(data.disciplinas[0].nome);
        }
        );
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
