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
    // confimação de exclusão
    if (confirm('Deseja realmente excluir este registro?') === true) {
      // caso confirme o professor é deletado passando como parâmetro seu ID
      this.professorService.deletarProfessor(codigoProfessor);
      // mensagem retornada
      this.tostr.success('Registro deletado.');
    }
  }

  listaProfessores() {
    // guarda os dados de todos os professores na variável
    const dadosProfessores = this.professorService.getData();
    // requisição é enviada
    dadosProfessores.snapshotChanges().subscribe(item => {
      // transforma variável em array
      this.professoresLista = [];
      // foreach para separar os dados de cada professor
      item.forEach(element => {
        // é guardado na variável dadosProfessorJSON o array de professores com seus dados
        const dadosProfessorJSON = element.payload.toJSON();
        dadosProfessorJSON['$codigoProfessor'] = element.key;
        // retorno dos dados da requisição
        this.professoresLista.push(dadosProfessorJSON as Professor);
      });
    });
  }
}
