import { RedefinirSenhaNovaComponent } from './login/redefinir-senha-nova/redefinir-senha-nova.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'adm/usuarios', loadChildren: () => import('./admin/painel-usuarios/painel-usuarios.module').then(m => m.PainelUsuariosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'adm/cursos', loadChildren: () => import('./admin/painel-cursos/painel-cursos.module').then(m => m.PainelCursosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'adm/simulados', loadChildren: () => import('./admin/painel-simulados/painel-simulados.module').then(m => m.PainelSimuladosModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'redefinir-senha-nova', component: RedefinirSenhaNovaComponent
  },

  {
    path: 'adm/disciplinas', loadChildren: () => import('./professor/painel-disciplinas/painel-disciplinas.module').then(m => m.PainelDisciplinasModule)
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
