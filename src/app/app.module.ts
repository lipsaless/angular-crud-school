import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// alunos
import { AlunosComponent } from './alunos/alunos';
import { AlunoCriaComponent } from './alunos/cria/aluno-cria';
import { AlunoListaComponent } from './alunos/lista/aluno-lista';
import { AlunoService } from './alunos/crud/aluno.service';
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
import { TurmaService } from './turmas/crud/turma.service';
// Sala de aula
import { SalaComponent } from './sala-de-aula/sala-de-aula';
import { SalaCriaComponent } from './sala-de-aula/cria/sala-de-aula-cria';
import { SalaListaComponent } from './sala-de-aula/lista/sala-de-aula-lista';

import { ToastrModule } from 'ngx-toastr';

// routes
import { AppRouter } from './app.routes';

// material angular
import { MatTabsModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';

import { AuthService } from './auth.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
    TabsComponent,
    HomeComponent,
    NavComponent,
    RegistrarComponent,
    LoginComponent,
    PaginaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-center', progressBar: true }),
    AppRouter,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlashMessagesModule,
    MultiselectDropdownModule,
    AngularFirestoreModule
  ],
  providers: [
    ProfessorService,
    DisciplinaService,
    AuthService,
    FlashMessagesService,
    AlunoService,
    TurmaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
