import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'adm/usuarios', loadChildren: () => import('./admin/painel-usuarios/painel-usuarios.module').then(m => m.PainelUsuariosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
