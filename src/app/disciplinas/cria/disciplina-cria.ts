import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DisciplinaService } from '../crud/disciplina.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disciplina-cria',
  templateUrl: './disciplina-cria.html',
  styleUrls: ['./disciplina-cria.css']
})
export class DisciplinaCriaComponent implements OnInit {

  constructor(
    private disciplinaService: DisciplinaService,
    private tostr: ToastrService
  ) { }

  ngOnInit() {
    this.resetarFormulario();
  }

  submitarFormulario(disciplinaForm: NgForm) {
    if (disciplinaForm.value.$codigoDisciplina == null) {
      this.disciplinaService.inserirDisciplina(disciplinaForm.value);
      this.tostr.success('Disciplina salva com sucesso.');
    } else {
      this.disciplinaService.alterarDisciplina(disciplinaForm.value);
      this.tostr.success('Alteração salva.');
    }
    this.resetarFormulario(disciplinaForm);
  }

  resetarFormulario(disciplinaForm?: NgForm) {
    disciplinaForm.reset();
    this.disciplinaService.disciplinaSelecionada = {
      $codigoDisciplina: null,
      nome: '',
      media: ''
    };
  }

}
