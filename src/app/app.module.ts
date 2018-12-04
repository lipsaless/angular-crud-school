import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Config firebase
import { environment } from '../environments/environment';

// Plugin mensagens
import { ToastrModule } from 'ngx-toastr';

// Rotas
import { AppRouter } from './app.routes';

// Serviço de autenticação
import { AuthService } from './auth.service';

// Biblioteca CSS
import { MatTabsModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Angular firestore
import { AngularFirestoreModule } from 'angularfire2/firestore';

// ======================== Componentes ==============================

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';

// ===================== Páginas =========================================
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


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TabsComponent,
    HomeComponent,
    LoginComponent,
    AlunosComponent,
    TurmasComponent,
    AlunoCriaComponent,
    TurmaCriaComponent,
    RegistrarComponent,
    TurmaListaComponent,
    AlunoListaComponent,
    ProfessoresComponent,
    DisciplinasComponent,
    ProfessorCriaComponent,
    ProfessorListaComponent,
    PaginaNotFoundComponent,
    DisciplinaCriaComponent,
    DisciplinaListaComponent,
  ],
  imports: [
    AppRouter,
    FormsModule,
    BrowserModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot({ positionClass: 'toast-top-center', progressBar: true }),
  ],
  providers: [
    AuthService,
    AlunoService,
    TurmaService,
    ProfessorService,
    DisciplinaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
