import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PainelDisciplinasService } from 'src/app/user/services/painel-disciplinas.service';

export interface Material {
  titulo: string;
  tipo: string;
  url: string;
  professor: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  constructor(
    private _service: PainelDisciplinasService,
    public dialogRef: MatDialogRef<MaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Material,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  close() {
    this.dialogRef.close();
  }

  redirecionar(url: string) {
    window.open(url, "_blank");
  }


}
