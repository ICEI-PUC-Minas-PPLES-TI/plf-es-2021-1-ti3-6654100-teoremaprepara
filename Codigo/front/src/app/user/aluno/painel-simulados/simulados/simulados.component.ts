import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PainelSimuladosService } from 'src/app/user/services/painel-simulados.service';

@Component({
  selector: 'app-simulados',
  templateUrl: './simulados.component.html',
  styleUrls: ['./simulados.component.scss']
})
export class SimuladosComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _service: PainelSimuladosService,
  ) { }

  ngOnInit(): void {
  }

}
