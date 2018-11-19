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

import { ToastrModule } from 'ngx-toastr';

// routes
import { AppRouter } from './app.routes';

// material angular
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunoCriaComponent,
    AlunoListaComponent,
    ProfessoresComponent,
    ProfessorCriaComponent,
    ProfessorListaComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
