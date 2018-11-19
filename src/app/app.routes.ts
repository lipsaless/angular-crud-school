import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos';
import { ProfessoresComponent } from './professores/professores';
// import { AppContactComponent } from './app-contact.component';

const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'professores', component: ProfessoresComponent }
];

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter { }