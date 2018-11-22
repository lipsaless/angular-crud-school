import { Component, OnInit } from '@angular/core';

import { AlunoService } from '../crud/aluno.service';
import { ToastrService } from 'ngx-toastr';
import { Aluno } from '../crud/aluno.model';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.html',
  styleUrls: ['./aluno-lista.css']
})
export class AlunoListaComponent implements OnInit {
  alunosLista: Aluno[];
  constructor(
    private alunoService: AlunoService, private tostr: ToastrService
  ) {
    this.listaAlunos();
   }

  ngOnInit() {
  }

  editaAluno(aluno: Aluno) {
    this.alunoService.alunoSelecionado = Object.assign({}, aluno);
  }

  deletaAluno(codigo: string) {
    if (confirm('Deseja realmente excluir este registro?') === true) {
      this.alunoService.deletaAluno(codigo);
      this.tostr.success('Aluno deletado.');
    }
  }

  listaAlunos() {
    const x = this.alunoService.getData();
    x.snapshotChanges().subscribe(item => {
      this.alunosLista = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$codigo'] = element.key;
        this.alunosLista.push(y as Aluno);
      });
    });
  }
}
