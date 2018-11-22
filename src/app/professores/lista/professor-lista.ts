import { Component, OnInit } from '@angular/core';

import { ProfessorService } from '../crud/professor.service';
import { Professor } from '../crud/professor.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.html',
  styleUrls: ['./professor-lista.css']
})
export class ProfessorListaComponent implements OnInit {
  professoresLista: Professor[];
  constructor(
    private professorService: ProfessorService, private tostr: ToastrService
  ) { 
    this.listaProfessores();
  }

  ngOnInit() {
  }

  editarProfessor(professor: Professor) {
    this.professorService.professorSelecionado = Object.assign({}, professor);
  }

  deletarProfessor(codigoProfessor: string) {
    if (confirm('Deseja realmente excluir este registro?') === true) {
      this.professorService.deletarProfessor(codigoProfessor);
      this.tostr.success('Registro deletado.');
    }
  }

  listaProfessores() {
    const x = this.professorService.getData();
    x.snapshotChanges().subscribe(item => {
      this.professoresLista = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$codigoProfessor'] = element.key;
        this.professoresLista.push(y as Professor);
      });
    });
  }
}
