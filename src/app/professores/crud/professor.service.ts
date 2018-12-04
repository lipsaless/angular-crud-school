import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Professor } from './professor.model';

@Injectable()
export class ProfessorService {
  professoresLista: AngularFireList<any>;
  professorDados: any;
  professorSelecionado: Professor = new Professor();
  constructor(
    private firebase: AngularFireDatabase
  ) { }

  // retorna todos os professores
  getData() {
    // guarda na variável "professoresLista" a lista de professores
    this.professoresLista = this.firebase.list('Professor');
    // retorna a lista
    return this.professoresLista;
  }

  // busca o professor passando seu ID como parâmetro
  professorById(idProfessor) {
    return this.firebase.database.ref('/Professor/' + idProfessor).once('value');
  }

  inserirProfessor(professor: Professor) {
    this.professoresLista.push({
      nome: professor.nome,
      sobrenome: professor.sobrenome,
      idade: professor.idade
    });
  }

  alterarProfessor(professor: Professor) {
    this.professoresLista.update(professor.$codigoProfessor,
      {
        nome: professor.nome,
        sobrenome: professor.sobrenome,
        idade: professor.idade
      });
  }

  deletarProfessor($key: string) {
    this.professoresLista.remove($key);
  }

}
