import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
const routes = [
  {
      path: '',
      component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ]
})
export class LoginModule { }
