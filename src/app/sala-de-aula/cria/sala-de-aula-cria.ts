import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SalaService } from '../crud/sala-de-aula.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sala-cria',
  templateUrl: './sala-de-aula-cria.html',
  styleUrls: ['./sala-de-aula-cria.css']
})
export class SalaCriaComponent implements OnInit {

  constructor(
    private salaService: SalaService, private tostr: ToastrService
  ) { }

  ngOnInit() {

    this.resetarFormulário();
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
      $turmaId: '',
      $alunoId: ''
    };
  }

}
