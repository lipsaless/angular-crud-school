import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlunoService } from '../crud/aluno.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-aluno-cria',
  templateUrl: './aluno-cria.html',
  styleUrls: ['./aluno-cria.css']
})
export class AlunoCriaComponent implements OnInit {
  nameButtonSave: String = 'Salvar';
  @ViewChild('idAluno') idAluno: ElementRef;

  constructor(private alunoService: AlunoService, private tostr: ToastrService) {
    // if (this.idAluno.nativeElement.$codigo === null) {
    //   this.nameButtonSave = 'Cadastrar';
    // } else {
    //   this.nameButtonSave = 'Salvar alterações';
    // }
  }

  ngOnInit() {
    this.resetarFomulario();
  }

  submitarFormulario(alunoForm: NgForm) {
    console.log(alunoForm);
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
