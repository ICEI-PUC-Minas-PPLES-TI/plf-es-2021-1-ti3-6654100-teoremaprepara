import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TextMaskModule } from 'angular2-text-mask';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ComponentsModule } from 'src/app/shared/components.module';
import { PainelUsuariosComponent } from './painel-usuarios.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes = [
  {
      path: '',
      component: PainelUsuariosComponent
  }
];


@NgModule({
  declarations: [
    PainelUsuariosComponent,
    EditarComponent,
    DeletarComponent,
    CadastrarComponent
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
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTooltipModule,
    TextMaskModule,
    MatChipsModule,
    MatStepperModule,
    MatCheckboxModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    DatePipe
  ],
})
export class PainelUsuariosModule { }
