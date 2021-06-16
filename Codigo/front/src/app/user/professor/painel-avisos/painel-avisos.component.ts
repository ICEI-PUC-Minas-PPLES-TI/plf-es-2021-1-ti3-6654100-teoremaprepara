import { Component, OnInit } from '@angular/core';
import { PainelDisciplinasService } from '../../services/painel-disciplinas.service';

export interface Disciplina {
  id: string;
  nome: string;
}

export interface Aviso {
  titulo: string;
  assunto: string;
}

@Component({
  selector: 'app-painel-avisos',
  templateUrl: './painel-avisos.component.html',
  styleUrls: ['./painel-avisos.component.scss']
})
export class PainelAvisosComponent implements OnInit {
  menu = [
    {
      opcao: "Disciplinas",
      icons: "article",
      url: "professor/disciplinas",
      color: "color: #FFFFFF",
    },
    {
      opcao: "Materiais",
      icons: "file_present",
      url: "professor/materiais",
      color: "color: #FFFFFF",
    },
    {
      opcao: "Avisos",
      icons: "campaign",
      url: "professor/avisos",
      color: "color: #7B7EFF",
    }
    
  ];
  nomeUser = "Paula Fernanda";
  iconHeader = "article";
  nomeHeader = "Avisos publicados por disciplina";
  panelOpenState = false;
  constructor(
    private _service: PainelDisciplinasService,
    
  ) { }

  disciplinas: Disciplina[];
  avisos: Aviso[];
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    const id = "4";
    this._service.getUserId(id).subscribe(data => {
        let result = data.disciplinas;
        this.disciplinas = result;
        console.log(result);
        }
        );
  }
  getAvisos(id: string){
    this._service.getAvisoDisciplina(id).subscribe(data => {
      this.avisos = data;
      console.log(data)
      }
    );
  }

}
