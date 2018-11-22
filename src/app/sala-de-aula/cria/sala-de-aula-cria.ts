import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SalaService } from '../crud/sala-de-aula.service';
import { AlunoService } from '../../alunos/crud/aluno.service';
import { TurmaService } from '../../turmas/crud/turma.service';

import { Aluno } from '../../alunos/crud/aluno.model';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'bootstrap-select';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-sala-cria',
  templateUrl: './sala-de-aula-cria.html',
  styleUrls: ['./sala-de-aula-cria.css']
})
export class SalaCriaComponent implements OnInit {
  listaAlunos: any;
  listaTurmas: any;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];

  constructor(
    private salaService: SalaService,
    private tostr: ToastrService,
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private dropdown: ElementRef
  ) { 
    const dadosAluno = this.alunoService.getData();
    dadosAluno.snapshotChanges().subscribe(item => {
      this.listaAlunos = [];
      item.forEach(element => {
        const dadosAlunoJson = element.payload.toJSON();
        dadosAlunoJson['$codigo'] = element.key;
        this.listaAlunos.push(dadosAlunoJson as Aluno);
      });
    });

    const dadosTurma = this.turmaService.getData();
    dadosTurma.snapshotChanges().subscribe(item => {
      this.listaTurmas = [];
      item.forEach(element => {
        const dadosTurmaJson = element.payload.toJSON();
        dadosTurmaJson['$codigoTurma'] = element.key;
        this.listaTurmas.push(dadosTurmaJson as Aluno);
      });
    });
   }

  ngOnInit() {
    this.resetarFormulário();
    this.myOptions = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
    ];
  }

  onChange() {
      console.log(this.optionsModel);
  }

  submitarFormulário(salaForm: NgForm) {
    if (salaForm.value.$key == null) {
      this.salaService.criarSala(salaForm.value);
      this.tostr.success('Disciplina salva com sucesso.');
    } else {
      this.salaService.alterarSala(salaForm.value);
      this.tostr.success('Alteração salva.');
    }
    this.resetarFormulário(salaForm);
  }

  resetarFormulário(salaForm?: NgForm) {
    salaForm.reset();
    this.salaService.salaSelecionada = {
      $codigoSala: null,
      turmaId: '',
      alunoId: ''
    };
  }

}
