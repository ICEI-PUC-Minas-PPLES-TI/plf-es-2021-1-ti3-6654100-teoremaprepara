import { CadastrarAvisosComponent } from './cadastrar-avisos/cadastrar-avisos.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PainelDisciplinasService } from '../../services/painel-disciplinas.service';
import { CadastrarMaterialComponent } from './cadastrar-material/cadastrar-material.component';


export interface DisciplinaData {
  id: string;
  name: string;
  progress: string;
}
export interface Disciplina {
  id: string;
  name: string;
  curso: string;
  professor: string;
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
  disciplina: Disciplina;
  constructor(
    public dialog: MatDialog,
    private _service: PainelDisciplinasService
  ) { }
  
  menu = [
    {
      opcao: "Disciplinas",
      icons: "article",
      url: "professor/disciplinas",
      color: "color: #7B7EFF",
    }
    
  ];
  nomeUser = "Paula Fernanda";
  iconHeader = "article";
  nomeHeader = "Disciplinas";

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(){
    const id = "104";
    this._service.getUserId(id).subscribe(data => {
        let result = data.disciplinas;
        this.dataSource = new MatTableDataSource(result);
        }
        );
  }

  openCadastrarAviso(id: String){
    this._service.getDisciplinaId(id).subscribe(
      response => {
        this.disciplina = {
          id: response.id,
          name: response.nome,
          curso: response.curso.nome,
          professor: response.professores[0].id,
        };
        const dialogRef = this.dialog.open(CadastrarAvisosComponent, {data: this.disciplina});
      }
    )
  }
  openCadastrarMaterial(id: String){
    this._service.getDisciplinaId(id).subscribe(
      response => {
        this.disciplina = {
          id: response.id,
          name: response.nome,
          curso: response.curso.nome,
          professor: response.professores[0].id,
        };
        const dialogRef = this.dialog.open(CadastrarMaterialComponent, {data: this.disciplina});
      }
    )
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
