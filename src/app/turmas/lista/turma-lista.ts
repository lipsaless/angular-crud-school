import { Component, OnInit } from '@angular/core';

import { TurmaService } from '../crud/turma.service';
import { Turma } from '../crud/turma.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-turma-lista',
  templateUrl: './turma-lista.html',
  styleUrls: ['./turma-lista.css']
})
export class TurmaListaComponent implements OnInit {
  turmasLista: Turma[];
  constructor(
    private turmaService: TurmaService, private tostr: ToastrService
  ) { }

  ngOnInit() {
    const x = this.turmaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.turmasLista = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$codigoTurma'] = element.key;
        this.turmasLista.push(y as Turma);
      });
    });
  }

  editarTurma(turma: Turma) {
    this.turmaService.turmaSelecionada = Object.assign({}, turma);
  }

  deletarTurma(codigoTurma: string) {
    if (confirm('Deseja realmente excluir este registro?') === true) {
      this.turmaService.deletarTurma(codigoTurma);
      this.tostr.warning('Registro deletado.');
    }
  }

}
