import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-simulados',
  templateUrl: './painel-simulados.component.html',
  styleUrls: ['./painel-simulados.component.scss']
})
export class PainelSimuladosComponent implements OnInit {

  constructor() { }

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
      url: "aluno/simulados",
      color: "color: #ffffff",
    }
    
  ];

  nomeUser = "Samara Alves";
  iconHeader = "article";
  nomeHeader = "Simulados";
  panelOpenState = false;

  ngOnInit(): void {
  }

}
