import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Turma } from './turma.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class TurmaService {
  // variáveis
  turmasLista: AngularFireList<any>;
  listaTurmaAluno: AngularFireList<any>;
  turmaSelecionada: Turma = new Turma();
  constructor(
    private firebase: AngularFireDatabase,
    private afs: AngularFirestore
  ) {
    // insere na variável listaTurmaAluno os alunos daquela turma
    this.listaTurmaAluno = this.firebase.list('TurmaAluno');
  }

  // trás todas as turmas
  getData() {
    this.turmasLista = this.firebase.list('Turmas');
    return this.turmasLista;
  }

  // insere turma no banco
  inserirTurma(turma: Turma) {
    // dados que estão no formulário
    this.turmasLista.push({
      nome: turma.nome,
      professorId: turma.professorId,
      disciplinaId: turma.disciplinaId
    });
  }

  // retorna alunos da turma
  alunoByTurma() {
    return this.firebase.database.ref('/TurmaAluno/').once('value');
  }

  // aloca o aluno na turma
  alocarAlunoTurma(idAluno: any, idTurma: any) {
    this.listaTurmaAluno.push({
      alunoId: idAluno,
      turmaId: idTurma
    });
  }

  // altera a turma
  alterarTurma(turma: Turma) {
    this.turmasLista.update(turma.$codigoTurma,
      {
        nome: turma.nome,
        professorId: turma.professorId,
        disciplinaId: turma.disciplinaId
      });
  }

  // delete turma com ID informado
  deletarTurma($codigoTurma: string) {
    this.turmasLista.remove($codigoTurma);
  }

}
