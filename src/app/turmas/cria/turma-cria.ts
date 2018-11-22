import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TurmaService } from '../crud/turma.service';
import { ToastrService } from 'ngx-toastr';
import { AlunoService } from '../../alunos/crud/aluno.service';

import { ProfessorService } from '../../professores/crud/professor.service';
import { DisciplinaService } from '../../disciplinas/crud/disciplina.service';
import { Professor } from '../../professores/crud/professor.model';
import { Aluno } from '../../alunos/crud/aluno.model';

@Component({
  selector: 'app-turma-cria',
  templateUrl: './turma-cria.html',
  styleUrls: ['./turma-cria.css']
})
export class TurmaCriaComponent implements OnInit {
  listaProfessores: any;
  listaDisciplinas: any;
  listaAlunos: any;
  isEdicao = false;
  // @ViewChild('idTurma') idTurma: ElementRef;

  constructor(
    private turmaService: TurmaService,
    private tostr: ToastrService,
    private professorService: ProfessorService,
    private disciplinaService: DisciplinaService,
    private alunoService: AlunoService
  ) { 
    this.listaProfessores = professorService.getData();
    this.listaDisciplinas = disciplinaService.getData();

    const dadosAluno = this.alunoService.getData();
    dadosAluno.snapshotChanges().subscribe(item => {
      this.listaAlunos = [];
      item.forEach(element => {
        const dadosAlunoJson = element.payload.toJSON();
        dadosAlunoJson['$codigoAluno'] = element.key;
        this.listaAlunos.push(dadosAlunoJson as Aluno);
      });
    });

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
      disciplinaId: null,
      listaAlunos: null
    };
  }

  isAlocado(alunoId) {
    const listaDaTurma = this.turmaService.turmaSelecionada.listaAlunos;
    if (listaDaTurma.indexOf(alunoId) !== -1) {
      return true;
    }
    return false;
  }

  alocarAluno(aluno: any, idTurma) {
    const alunoId = aluno.$codigoAluno;
    this.turmaService.alocarAlunoTurma(alunoId, idTurma);
    this.turmaService.turmaSelecionada.listaAlunos.push(aluno.$codigoAluno);
  }

}
