import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule, } from '@angular/common/http';
import { PainelSimuladosComponent } from './admin/painel-simulados/painel-simulados.component';
import { ComponentsModule } from './shared/components.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    LoginModule,
    MatDialogModule,
    HttpClientModule
    HttpClientModule,
    LoginModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
