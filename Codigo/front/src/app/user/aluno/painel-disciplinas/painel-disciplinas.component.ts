import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PainelDisciplinasService } from '../../services/painel-disciplinas.service';
import { AvisosComponent } from './avisos/avisos.component';

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

  constructor(
    public dialog: MatDialog,
    private _service: PainelDisciplinasService,
  ) { }

  menu = [
    {
      opcao: "Disciplinas",
      icons: "article",
      url: "aluno/disciplinas",
      color: "color: #7B7EFF",
    },
    {
      opcao: "Simulados",
      icons: "article",
      url: "aluno/disciplinas",
      color: "color: #ffffff",
    }
    
  ];
  nomeUser = "Samara Alves";
  iconHeader = "article";
  nomeHeader = "Disciplinas";

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    const id = "18";
    this._service.getCursoId(id).subscribe(data => {
        let result = data.disciplinas;
        console.log(result)
        this.dataSource = new MatTableDataSource(result);
        }
      );
  }

  openVisualizarAvisos(id: string){
    const MatDialogRef = this.dialog.open(AvisosComponent, {data: id});
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
