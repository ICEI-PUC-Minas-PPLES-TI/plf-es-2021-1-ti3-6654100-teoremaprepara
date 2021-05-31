import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PainelDisciplinasService } from '../../services/painel-disciplinas.service';

export interface Disciplina {
  id: string;
  nome: string;
}

export interface Material {
  titulo: string;
  url: string
}

@Component({
  selector: 'app-painel-materiais',
  templateUrl: './painel-materiais.component.html',
  styleUrls: ['./painel-materiais.component.scss']
})
export class PainelMateriaisComponent implements OnInit {
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
      color: "color: #7B7EFF",
    },
    {
      opcao: "Avisos",
      icons: "campaign",
      url: "professor/avisos",
      color: "color: #FFFFFF",
    }
    
  ];
  nomeUser = "Paula Fernanda";
  iconHeader = "article";
  nomeHeader = "Materiais publicados por disciplina";
  panelOpenState = false;
  
  constructor(
    private _service: PainelDisciplinasService,
    private router: Router,
    private ngZone: NgZone,
  ) { }
  disciplinas: Disciplina[];
  material: Material[];
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    const id = "104";
    this._service.getUserId(id).subscribe(data => {
        let result = data.disciplinas;
        this.disciplinas = result;
        console.log(result);
        }
        );
  }
  getMaterial(id: string){
    this._service.getMateriaisDisciplina(id).subscribe(data => {
      this.material = data;
      console.log(data)
      }
    );
  }
  redirecionar(url: string) {
    //window.location.href ='https://qastack.com.br/programming/34338440/how-to-redirect-to-an-external-url-in-angular2';
    window.open(url, "_blank");
  }

}
