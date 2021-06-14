import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PainelSimuladosService } from '../services/painel-simulados.service';
import { AdicionarResultadosComponent } from './adicionar-resultados/adicionar-resultados.component';

@Component({
  selector: 'app-painel-simulados',
  templateUrl: './painel-simulados.component.html',
  styleUrls: ['./painel-simulados.component.scss']
})
export class PainelSimuladosComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _service: PainelSimuladosService
  ) { }
  cursos: any;
  simulados: any;
  menu = [
    {
      opcao: "Usuários",
      icons: "group",
      url: "adm/usuarios",
      color: "color: #FFFFFF",
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
      color: "color: #7B7EFF",
    },
    
  ];
  nomeUser = "Elmo Junior";
  iconHeader = "article";
  nomeHeader = "Simulados";
  panelOpenState = false;
  
  ngOnInit(): void {
    this.getCurso();
  }

  getCurso(){
    this._service.getCurso().subscribe(data => {
      this.cursos = data;
   })
  }

  getSimuladoByCurso(id: any){
    this._service.getSimuladoByCurso(id).subscribe(data => {
      this.simulados = data;
   })
  }

  openAddResultados(nome: String, id: String) {
    const dialogRef = this.dialog.open(AdicionarResultadosComponent,{
      data: {
        name: nome,
        id: id
      }
      }      
    );

  }

}
