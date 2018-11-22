import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Sala } from './sala-de-aula.model';

@Injectable()
export class SalaService {
  salaDados: AngularFireList<any>;
  salaSelecionada: Sala = new Sala();
  constructor(
    private firebase: AngularFireDatabase
  ) { }

  getData() {
    this.salaDados = this.firebase.list('Sala');
    return this.salaDados;
  }

  criarSala(sala: Sala) {
    this.salaDados.push({
      turmaId: sala.turmaId,
      alunoId: sala.turmaId,
    });
  }

  alterarSala(sala: Sala) {
    this.salaDados.update(sala.$codigoSala,
      {
        turmaId: sala.turmaId,
        alunoId: sala.alunoId
      });
  }

  deletarSala($codigoSala: string) {
    this.salaDados.remove($codigoSala);
  }

}
