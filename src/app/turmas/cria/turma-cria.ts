import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TurmaService } from '../crud/turma.service';
import { ToastrService } from 'ngx-toastr';

import { ProfessorService } from '../../professores/crud/professor.service';
import { DisciplinaService } from '../../disciplinas/crud/disciplina.service';
import { Professor } from '../../professores/crud/professor.model';

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

    const dadosProfessor = this.professorService.getData();
    dadosProfessor.snapshotChanges().subscribe(item => {
      this.listaProfessores = [];
      item.forEach(element => {
        const dadosProfessorJson = element.payload.toJSON();
        dadosProfessorJson['$codigoProfessor'] = element.key;
        this.listaProfessores.push(dadosProfessorJson as Professor);
      });
    });

    const dadosDisciplina = this.disciplinaService.getData();
    dadosDisciplina.snapshotChanges().subscribe(item => {
      this.listaDisciplinas = [];
      item.forEach(element => {
        const dadosDisciplinaJson = element.payload.toJSON();
        dadosDisciplinaJson['$codigoDisciplina'] = element.key;
        this.listaDisciplinas.push(dadosDisciplinaJson as Professor);
      });
    });
  }

  ngOnInit() {
    this.resetarFormulario();
  }

  submitarFormulario(turmaForm: NgForm) {
    if (turmaForm.value.$codigoTurma == null) {
      this.turmaService.inserirTurma(turmaForm.value);
      this.tostr.success('Turma salva com sucesso.');
    } else {
      this.turmaService.alterarTurma(turmaForm.value);
      this.tostr.success('Alteração salva.');
    }
    this.resetarFormulario(turmaForm);
  }

  resetarFormulario(turmaForm?: NgForm) {
    turmaForm.reset();
    this.turmaService.turmaSelecionada = {
      $codigoTurma: null,
      nome: '',
      professorId: null,
      disciplinaId: null
    };
  }

}
