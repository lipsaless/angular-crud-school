import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Turma } from './turma.model';
import { TurmaAluno } from './turma-aluno.model';
import { AngularFirestore } from 'angularfire2/firestore';
 
@Injectable()
export class TurmaService {
  turmasLista: AngularFireList<any>;
  listaTurmaAluno: AngularFireList<any>;
  turmaSelecionada: Turma = new Turma();
  constructor(
    private firebase: AngularFireDatabase,
    private afs: AngularFirestore
  ) { 
    this.listaTurmaAluno = this.firebase.list('TurmaAluno');
  }

  getData() {
    this.turmasLista = this.firebase.list('Turmas');
    return this.turmasLista;
  }

  inserirTurma(turma: Turma) {
    this.turmasLista.push({
      nome: turma.nome,
      professorId: turma.professorId,
      disciplinaId: turma.disciplinaId
    });
  }

  alunoByTurma() {
    return this.firebase.database.ref('/TurmaAluno/').once('value');
  }

  alocarAlunoTurma(idAluno: any, idTurma: any) {
    this.listaTurmaAluno.push({
      alunoId: idAluno,
      turmaId: idTurma
    });
  }

  alterarTurma(turma: Turma) {
    this.turmasLista.update(turma.$codigoTurma,
      {
        nome: turma.nome,
        professorId: turma.professorId,
        disciplinaId: turma.disciplinaId
      });
  }

  deletarTurma($codigoTurma: string) {
    this.turmasLista.remove($codigoTurma);
  }

}
