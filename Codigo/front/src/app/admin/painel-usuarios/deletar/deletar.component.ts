import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PainelUsuariosService } from '../../services/painel-usuarios.service';

export interface User {
  fullName: String;
  id: String;
}

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.scss']
})
export class DeletarComponent implements OnInit {

  constructor(
    private _service: PainelUsuariosService,
    public dialogRef: MatDialogRef<DeletarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  ngOnInit(): void {
  }

  async deleteUser(){
    let  result = await this._service.delete(this.data.id);
    this.close();      
    
  }
   close(){
     this.dialogRef.close();
   }
}
