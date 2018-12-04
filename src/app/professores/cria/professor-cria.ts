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
    // após os elementos estarem na tela o formulário é resetado
    this.resetarFormulario();
  }

  submitarFormulario(professorForm: NgForm) {
    // caso não tenha o ID do professor no formulário ele entende que é um novo registro
    if (professorForm.value.$codigoProfessor == null) {
      // professor é inserido passando como parâmetros os campos do formulário
      this.professorService.inserirProfessor(professorForm.value);
      // mensagem de sucesso é retornada
      this.tostr.success('Professor salvo com sucesso.');
    } else {
      // caso tenha o ID do professor no formulário ele entende que é a edição de um registro
      this.professorService.alterarProfessor(professorForm.value);
      // mensagem de alteração é retornada
      this.tostr.success('Alteração salva.');
    }
    // após INSERIR/ALTERAR o formulário é resetado
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
