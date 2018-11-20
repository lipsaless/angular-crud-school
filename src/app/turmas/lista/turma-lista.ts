import { Component, OnInit } from '@angular/core';

import { TurmaService } from '../crud/turma.service';
import { ProfessorService } from '../../professores/crud/professor.service';
import { DisciplinaService } from '../../disciplinas/crud/disciplina.service';

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
    private turmaService: TurmaService,
    private professorService: ProfessorService,
    private disciplinaService: DisciplinaService,
    private tostr: ToastrService
  ) { }

  async ngOnInit() {
    const x = this.turmaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.turmasLista = [];
      item.forEach(async element => {
        const y = element.payload.toJSON();
        // retorna id do professor
        const p = await this.professorService.professorById(y['professorId']);
        const d = await this.disciplinaService.disciplinaById(y['disciplinaId']);
        y['$codigoTurma'] = element.key;
        y['dadosProfessor'] = p.val();
        y['dadosDisciplina'] = d.val();
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
