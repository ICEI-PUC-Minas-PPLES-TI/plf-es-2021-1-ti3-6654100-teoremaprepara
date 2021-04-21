import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';

import { ComponentsModule } from 'src/app/shared/components.module';
import { PainelUsuariosComponent } from './painel-usuarios.component';

const routes = [
  {
      path: '',
      component: PainelUsuariosComponent
  }
];


@NgModule({
  declarations: [
    PainelUsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    ComponentsModule,
  ]
})
export class PainelUsuariosModule { }
