import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProfessorService } from '../crud/professor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-professor-cria',
  templateUrl: './professor-cria.html',
  styleUrls: ['./professor-cria.css']
})
export class ProfessorCriaComponent implements OnInit {

  constructor(
    private professorService: ProfessorService, private tostr: ToastrService
  ) { }

  ngOnInit() {

    this.resetarFormulario();
  }

  submitarFormulario(professorForm: NgForm) {
    if (professorForm.value.$codigoProfessor == null) {
      this.professorService.inserirProfessor(professorForm.value);
      this.tostr.success('Professor salvo com sucesso.');
    } else {
      this.professorService.alterarProfessor(professorForm.value);
      this.tostr.success('Alteração salva.');
    }
    this.resetarFormulario(professorForm);
  }

  resetarFormulario(professorForm?: NgForm) {
    professorForm.reset();
    this.professorService.professorSelecionado = {
      $codigoProfessor: null,
      nome: '',
      sobrenome: '',
      idade: ''
    };
  }

}
