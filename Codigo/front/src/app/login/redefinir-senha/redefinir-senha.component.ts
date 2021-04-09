import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})
export class RedefinirSenhaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RedefinirSenhaComponent>) { }

  ngOnInit(): void {
  }

    confirmar(): void {
    this.dialogRef.close();
  }

}
