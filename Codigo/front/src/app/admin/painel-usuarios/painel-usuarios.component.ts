import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { EditarComponent, User } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PainelUsuariosService } from '../services/painel-usuarios.service';

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
  user: string;
  constructor(
    public dialog: MatDialog,
    private _service: PainelUsuariosService
    ) { 
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
    this.getUser();
    
  }
  openEdit(
    id: String,
    fullName: String,
    dataNascimento: String,
    telefone: String,
    rg: String,
    emailAddress: String,
    cursoId: String,
    cursoNome: String,
    turma: String,
    role: String,
    disciplinaId: String,
    //disciplinaNome: String,
    ) {
    const dialogRef = this.dialog.open(EditarComponent,{
      data: {
        id: id,
        fullName: fullName,
        dataNascimento: "12-12-1999",
        telefone: telefone,
        rg: rg,
        emailAddress: emailAddress,
        cursoId: cursoId,
        cursoNome: cursoNome,
        turma: turma,
        role: role,
        disciplinaId: disciplinaId,
        //disciplinaNome: disciplinaNome,
      }
    });
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

}
