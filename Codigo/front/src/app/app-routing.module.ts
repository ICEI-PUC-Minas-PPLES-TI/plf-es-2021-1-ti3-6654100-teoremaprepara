import { AlunoGuard } from './guards/aluno.guard';
import { RedefinirSenhaNovaComponent } from './login/redefinir-senha-nova/redefinir-senha-nova.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ProfessorGuard } from './guards/professor.guard';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'redefinir-senha-nova', component: RedefinirSenhaNovaComponent
  },
  {
    path: 'adm/usuarios', loadChildren: () => import('./admin/painel-usuarios/painel-usuarios.module').then(m => m.PainelUsuariosModule),
    canActivate: [AuthGuard, AdminGuard ]
  },
  {
    path: 'adm/cursos', loadChildren: () => import('./admin/painel-cursos/painel-cursos.module').then(m => m.PainelCursosModule),
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'adm/simulados', loadChildren: () => import('./admin/painel-simulados/painel-simulados.module').then(m => m.PainelSimuladosModule),
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'professor/disciplinas', loadChildren: () => import('./user/professor/painel-disciplinas/painel-disciplinas.module').then(m => m.PainelDisciplinasModule),
    canActivate: [AuthGuard, ProfessorGuard]
  },
  {
    path: 'professor/materiais', loadChildren: () => import('./user/professor/painel-materiais/painel-materiais.module').then(m => m.PainelMateriaisModule),
    canActivate: [AuthGuard, ProfessorGuard]
  },
  {
    path: 'professor/avisos', loadChildren: () => import('./user/professor/painel-avisos/painel-avisos.module').then(m => m.PainelAvisosModule),
    canActivate: [AuthGuard, ProfessorGuard]
  },
  {
    path: 'aluno/disciplinas', loadChildren: () => import('./user/aluno/painel-disciplinas/painel-disciplinas.module').then(m => m.PaineldisciplinasModule)
  },
  {
    path: 'aluno/simulados', loadChildren: () => import('./user/aluno/painel-simulados/painel-simulados.module').then(m => m.PainelSimuladosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
