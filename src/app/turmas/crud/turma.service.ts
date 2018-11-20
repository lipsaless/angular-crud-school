import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Turma } from './turma.model';

@Injectable()
export class TurmaService {
  turmasLista: AngularFireList<any>;
  turmaSelecionada: Turma = new Turma();
  constructor(
    private firebase: AngularFireDatabase
  ) { }

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
