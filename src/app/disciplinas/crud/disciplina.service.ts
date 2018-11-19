import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Disciplina } from './disciplina.model';

@Injectable()
export class DisciplinaService {
  disciplinasLista: AngularFireList<any>;
  disciplinaSelecionada: Disciplina = new Disciplina();
  constructor(
    private firebase: AngularFireDatabase
  ) { }

  getData() {
    this.disciplinasLista = this.firebase.list('Disciplina');
    return this.disciplinasLista;
  }

  inserirProfessor(disciplina: Disciplina) {
    this.disciplinasLista.push({
      nome: disciplina.nome,
      sobrenome: disciplina.media,
    });
  }

  alterarProfessor(disciplina: Disciplina) {
    this.disciplinasLista.update(disciplina.$codigoDisciplina,
      {
        nome: disciplina.nome,
        media: disciplina.media
      });
  }

  deletarProfessor($codigoDisciplina: string) {
    this.disciplinasLista.remove($codigoDisciplina);
  }

}
