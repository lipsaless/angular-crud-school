import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos';
import { ProfessoresComponent } from './professores/professores';
import { DisciplinasComponent } from './disciplinas/disciplinas';
import { TurmasComponent } from './turmas/turmas';
import { SalaComponent } from './sala-de-aula/sala-de-aula';

const routes: Routes = [
    { path: '', redirectTo: '/alunos', pathMatch: 'full' },
    // { path: 'home', component: AppComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'professores', component: ProfessoresComponent },
    { path: 'disciplinas', component: DisciplinasComponent },
    { path: 'turmas', component: TurmasComponent },
    { path: 'criar-sala', component: SalaComponent }
];

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter { }