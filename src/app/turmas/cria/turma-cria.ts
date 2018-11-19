import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TurmaService } from '../crud/turma.service';
import { ToastrService } from 'ngx-toastr';

import { ProfessorService } from '../../professores/crud/professor.service';
import { DisciplinaService } from '../../disciplinas/crud/disciplina.service';

@Component({
  selector: 'app-turma-cria',
  templateUrl: './turma-cria.html',
  styleUrls: ['./turma-cria.css']
})
export class TurmaCriaComponent implements OnInit {
  listaProfessores: any;
  listaDisciplinas: any;

  constructor(
    private turmaService: TurmaService,
    private tostr: ToastrService,
    private professorService: ProfessorService,
    private disciplinaService: DisciplinaService
  ) { 
    this.listaProfessores = professorService.getData();
    this.listaDisciplinas = disciplinaService.getData();
    console.log(this.listaProfessores);
  }

  ngOnInit() {

    this.resetarFormulário();
  }

  submitarFormulário(turmaForm: NgForm) {
    if (turmaForm.value.$key == null) {
      this.turmaService.inserirTurma(turmaForm.value);
      this.tostr.success('Disciplina salva com sucesso.');
    } else {
      this.turmaService.alterarTurma(turmaForm.value);
      this.tostr.success('Alteração salva.');
    }
    this.resetarFormulário(turmaForm);
  }

  resetarFormulário(turmaForm?: NgForm) {
    turmaForm.reset();
    this.turmaService.turmaSelecionada = {
      $codigoTurma: null,
      nome: ''
    };
  }

}
