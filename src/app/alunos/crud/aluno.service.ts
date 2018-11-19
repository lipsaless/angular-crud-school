import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Aluno } from './aluno.model';
@Injectable()
export class AlunoService {
  alunosLista: AngularFireList<any>;
  alunoSelecionado: Aluno = new Aluno();
  constructor(private firebase: AngularFireDatabase ) { }

  getData() {
    this.alunosLista = this.firebase.list('Alunos');
    return this.alunosLista;
  }

  inserirAluno(aluno: Aluno) {
    this.alunosLista.push({
      nome: aluno.nome,
      sobrenome: aluno.sobrenome,
      idade: aluno.idade
    });
  }

  alteraAluno(aluno: Aluno) {
    this.alunosLista.update(aluno.$codigo,
      {
        nome: aluno.nome,
        sobrenome: aluno.sobrenome,
        idade: aluno.idade
      });
  }

  deletaAluno($codigo: string) {
    this.alunosLista.remove($codigo);
  }

}
