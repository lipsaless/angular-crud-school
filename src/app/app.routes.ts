import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos/alunos';
import { ProfessoresComponent } from './professores/professores';
import { DisciplinasComponent } from './disciplinas/disciplinas';
import { TurmasComponent } from './turmas/turmas';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';

// rotas
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistrarComponent },
    { path: 'home', component: HomeComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'professores', component: ProfessoresComponent },
    { path: 'disciplinas', component: DisciplinasComponent },
    { path: 'turmas', component: TurmasComponent },
    { path: '**', component: PaginaNotFoundComponent }
];

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter {}
