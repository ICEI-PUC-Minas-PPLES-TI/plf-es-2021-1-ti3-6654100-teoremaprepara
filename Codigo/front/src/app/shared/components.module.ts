import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [MenuComponent, HeaderComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [MenuComponent, HeaderComponent]
})
export class ComponentsModule { }
