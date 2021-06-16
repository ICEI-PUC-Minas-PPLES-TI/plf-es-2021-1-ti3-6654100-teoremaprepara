import { Component, OnInit } from '@angular/core';
import { PainelSimuladosService } from '../../services/painel-simulados.service';


@Component({
  selector: 'app-painel-simulados',
  templateUrl: './painel-simulados.component.html',
  styleUrls: ['./painel-simulados.component.scss']
})
export class PainelSimuladosComponent implements OnInit {

  constructor(private _service: PainelSimuladosService) { }
  simulados: any;
  resultados: any;
  menu = [
    {
      opcao: "Disciplinas",
      icons: "menu_book",
      url: "aluno/disciplinas",
      color: "color: #ffffff",
    },
    {
      opcao: "Simulados",
      icons: "article",
      url: "aluno/simulados",
      color: "color: #7B7EFF",
    }
    
  ];

  nomeUser = "Samara Alves";
  iconHeader = "article";
  nomeHeader = "Simulados";
  panelOpenState = false;

  ngOnInit(): void {
    this.getResultadoSimuladoByAluno("1");
  }

  getSimuladoByCurso(id: any){
    this._service.getSimuladoByCurso(id).subscribe(data => {
      this.simulados = data;

   })
  }

  getResultadoSimuladoByAluno(id: any){
    this._service.getResultadoSimuladoByAluno(id).subscribe(data => {
      this.resultados = data;
    })
  }

}
