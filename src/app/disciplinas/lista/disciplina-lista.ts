import { Component, OnInit } from '@angular/core';

import { DisciplinaService } from '../crud/disciplina.service';
import { Disciplina } from '../crud/disciplina.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.html',
  styleUrls: ['./disciplina-lista.css']
})
export class DisciplinaListaComponent implements OnInit {
  disciplinasLista: Disciplina[];
  constructor(
    private disciplinaService: DisciplinaService, private tostr: ToastrService
  ) { }

  ngOnInit() {
    const x = this.disciplinaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.disciplinasLista = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$codigoProfessor'] = element.key;
        this.disciplinasLista.push(y as Disciplina);
      });
    });
  }

  editarDisciplina(disciplina: Disciplina) {
    this.disciplinaService.disciplinaSelecionada = Object.assign({}, disciplina);
  }

  deletarDisciplina(codigoDisciplina: string) {
    if (confirm('Deseja realmente excluir este registro?') === true) {
      this.disciplinaService.deletarProfessor(codigoDisciplina);
      this.tostr.warning('Registro deletado.');
    }
  }

}
