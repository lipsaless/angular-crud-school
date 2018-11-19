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
    private disciplinaService: DisciplinaService, private tostr: ToastrService
  ) { }

  ngOnInit() {

    this.resetarFormulário();
  }

  submitarFormulário(disciplinaForm: NgForm) {
    if (disciplinaForm.value.$key == null) {
      this.disciplinaService.inserirProfessor(disciplinaForm.value);
      this.tostr.success('Disciplina salva com sucesso.');
    } else {
      this.disciplinaService.alterarProfessor(disciplinaForm.value);
      this.tostr.success('Alteração salva.');
    }
    this.resetarFormulário(disciplinaForm);
  }

  resetarFormulário(disciplinaForm?: NgForm) {
    disciplinaForm.reset();
    this.disciplinaService.disciplinaSelecionada = {
      $codigoDisciplina: null,
      nome: '',
      media: ''
    };
  }

}
