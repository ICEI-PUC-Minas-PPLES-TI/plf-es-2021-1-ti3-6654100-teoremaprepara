import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addSenha(): void {
    const dialogRef = this.dialog.open(RedefinirSenhaComponent, {
      width: '40vw',
      height: '50vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
