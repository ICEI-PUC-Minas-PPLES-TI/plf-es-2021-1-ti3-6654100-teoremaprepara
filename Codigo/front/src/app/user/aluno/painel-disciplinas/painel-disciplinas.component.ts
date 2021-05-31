import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PainelDisciplinasService } from '../../services/painel-disciplinas.service';
import { AvisosComponent } from './avisos/avisos.component';


export interface Disciplina {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-painel-disciplinas',
  templateUrl: './painel-disciplinas.component.html',
  styleUrls: ['./painel-disciplinas.component.scss']
})
export class PainelDisciplinasComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _service: PainelDisciplinasService,
  ) { }

  menu = [
    {
      opcao: "Disciplinas",
      icons: "menu_book",
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
  disciplinas: Disciplina[];
  cor = ["#9F55AD", "#436E8E", "#E38569", "#21ABC9", "#97A7E2", "#E9BD23", "#C7398E", "#D893E5", "#2F970B"];
  ngOnInit(): void {
    this.getUser();
    
  }

  getUser(){
    const id = "18";
    this._service.getCursoId(id).subscribe(data => {
        let result = data.disciplinas;
        this.disciplinas = result;

        }
      );
  }

  openVisualizarAvisos(id: string){
    const MatDialogRef = this.dialog.open(AvisosComponent, {data: id});
  }
  gera_cor(index: any) {
    const hexadecimais = '0123456789ABCDEF';
    
    // Pega um número aleatório no array acima
    for (var i = 0; i < this.cor.length; i++ ) {
      if(i==index){
        return  this.cor[i];
      }
    }
    return "#fffff"
    
}
  
}
