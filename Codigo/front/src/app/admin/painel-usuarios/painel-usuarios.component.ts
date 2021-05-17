import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PainelUsuariosService } from '../services/painel-usuarios.service';
import { User } from './user';

export interface UserData {
  id: string;
  name: string;
  progress: string;
}



@Component({
  selector: 'app-painel-usuarios',
  templateUrl: './painel-usuarios.component.html',
  styleUrls: ['./painel-usuarios.component.scss']
})
export class PainelUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  user: User;
  nome: String;
  constructor(
    public dialog: MatDialog,
    private _service: PainelUsuariosService
    ) { 
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // this.dataSource = new MatTableDataSource(users);
  }

  menu = [
    {
      opcao: "Usuários",
      icons: "group",
      url: "adm/usuarios",
      color: "color: #7B7EFF",
    },
    {
      opcao: "Cursos",
      icons: "article",
      url: "adm/cursos",
      color: "color: #FFFFFF",
    },
    {
      opcao: "Simulados",
      icons: "article",
      url: "adm/simulados",
      color: "color: #FFFFFF",
    },
    
  ];
  nomeUser = "Elmo Junior";
  iconHeader = "group";
  nomeHeader = "Usuários";
  ngOnInit(): void {
    this.getUser();
    
  }
  

  openDelet(id: String, nome: String) {
    const dialogRef = this.dialog.open(DeletarComponent,{
      data: {
        fullName: nome,
        id: id
      }
      }      
    );

  }
  openAdd(){
    const dialogRef = this.dialog.open(CadastrarComponent);
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
  

  getUser(){
    this._service.getUser().subscribe(data => {
      let result = data;
      this.dataSource = new MatTableDataSource(result);      
   })
  }
  openEdit(id: String) {
    this._service.getUserId(id).subscribe(
      response => {
        this.user = {
          id: response.id,
          fullName: response.fullName,
          dataNascimento: response.dataNascimento,
          telefone: response.telefone,
          rg: response.rg,
          emailAddress: response.emailAddress,
          cursoId: response.curso.id,
          cursoNome: response.curso.nome,
        //   //turma: response.turma,
          role: response.role,
        //   // disciplinaId: response.disciplinaId,
        //   // disciplinaNome: response.disciplinaNome,
        }
        const dialogRef = this.dialog.open(EditarComponent, {data: this.user});
          //curso: [null],
          //disciplina: [null],
          //tipoUser: [this.user.role],  
        }
        );

  }

}
