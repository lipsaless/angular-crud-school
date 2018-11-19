import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// alunos
import { AlunosComponent } from './alunos/alunos';
import { AlunoCriaComponent } from './alunos/cria/aluno-cria';
import { AlunoListaComponent } from './alunos/lista/aluno-lista';
// professores
import { ProfessoresComponent } from './professores/professores';
import { ProfessorCriaComponent } from './professores/cria/professor-cria';
import { ProfessorListaComponent } from './professores/lista/professor-lista';
import { ProfessorService } from './professores/crud/professor.service';
// disciplinas
import { DisciplinasComponent } from './disciplinas/disciplinas';
import { DisciplinaCriaComponent } from './disciplinas/cria/disciplina-cria';
import { DisciplinaListaComponent } from './disciplinas/lista/disciplina-lista';
import { DisciplinaService } from './disciplinas/crud/disciplina.service';
// turmas
import { TurmasComponent } from './turmas/turmas';
import { TurmaCriaComponent } from './turmas/cria/turma-cria';
import { TurmaListaComponent } from './turmas/lista/turma-lista';
// Sala de aula
import { SalaComponent } from './sala-de-aula/sala-de-aula';
import { SalaCriaComponent } from './sala-de-aula/cria/sala-de-aula-cria';
import { SalaListaComponent } from './sala-de-aula/lista/sala-de-aula-lista';

import { ToastrModule } from 'ngx-toastr';

// routes
import { AppRouter } from './app.routes';

// material angular
import { MatTabsModule } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunoCriaComponent,
    AlunoListaComponent,
    ProfessoresComponent,
    ProfessorCriaComponent,
    ProfessorListaComponent,
    DisciplinasComponent,
    DisciplinaCriaComponent,
    DisciplinaListaComponent,
    TurmasComponent,
    TurmaCriaComponent,
    TurmaListaComponent,
    SalaComponent,
    SalaCriaComponent,
    SalaListaComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRouter,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProfessorService,
    DisciplinaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
