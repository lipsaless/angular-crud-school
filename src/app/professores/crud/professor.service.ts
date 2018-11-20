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

  getData() {
    this.professoresLista = this.firebase.list('Professor');
    return this.professoresLista;
  }
  
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
