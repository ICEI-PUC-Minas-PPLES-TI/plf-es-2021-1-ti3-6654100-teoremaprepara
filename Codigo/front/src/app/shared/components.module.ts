import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [MenuComponent, HeaderComponent, LoadingComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [MenuComponent, HeaderComponent, LoadingComponent]
})
export class ComponentsModule { }
