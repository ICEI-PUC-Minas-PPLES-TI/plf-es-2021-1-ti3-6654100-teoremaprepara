import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login.component';
import { MatFormField } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { MatDialogModule } from "@angular/material/dialog";

const routes = [
  {
      path: '',
      component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RedefinirSenhaComponent
    ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatBottomSheetModule,
    MatDialogModule
  ]
})
export class LoginModule { }
