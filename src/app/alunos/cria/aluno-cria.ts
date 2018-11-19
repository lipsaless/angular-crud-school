import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlunoService } from '../crud/aluno.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-aluno-cria',
  templateUrl: './aluno-cria.html',
  styleUrls: ['./aluno-cria.css']
})
export class AlunoCriaComponent implements OnInit {
  nameButtonSave: String = 'Cadastrar';

  constructor(private alunoService: AlunoService, private tostr: ToastrService) { }

  ngOnInit() {

    this.resetarFomulario();
  }

  submitarFormulario(alunoForm: NgForm) {
    // se não tiver id do aluno será um novo cadastro
    if (alunoForm.value.$codigo == null) {
      // insere e retorna mensagem
      this.alunoService.inserirAluno(alunoForm.value);
      this.tostr.success('Aluno cadastrado com sucesso.');
    } else {
      // altera e retorna mensagem
      this.alunoService.alteraAluno(alunoForm.value);
      this.tostr.success('Aluno alterado.');
    }
    // reseta formulário
    this.resetarFomulario(alunoForm);
  }

  resetarFomulario(alunoForm?: NgForm) {
    // reseta formulário
    alunoForm.reset();
    this.alunoService.alunoSelecionado = {
      $codigo: null,
      nome: '',
      sobrenome: '',
      idade: ''
    };
  }

}
