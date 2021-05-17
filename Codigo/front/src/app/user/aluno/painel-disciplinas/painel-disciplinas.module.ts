import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisosComponent } from './avisos/avisos.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { PainelDisciplinasComponent } from './painel-disciplinas.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextMaskModule } from 'angular2-text-mask';
import { AvisoComponent } from './avisos/aviso/aviso.component';

const routes = [
  {
      path: '',
      component: PainelDisciplinasComponent
  }
];

@NgModule({
  declarations: [ PainelDisciplinasComponent,AvisosComponent, MateriaisComponent, AvisoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
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
  ]
})
export class PaineldisciplinasModule { }
