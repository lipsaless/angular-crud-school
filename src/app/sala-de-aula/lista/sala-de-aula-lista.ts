import { Component, OnInit } from '@angular/core';

import { SalaService } from '../crud/sala-de-aula.service';
import { Sala } from '../crud/sala-de-aula.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sala-lista',
  templateUrl: './sala-de-aula-lista.html',
  styleUrls: ['./sala-de-aula-lista.css']
})
export class SalaListaComponent implements OnInit {
  salasLista: Sala[];
  constructor(
    private salaService: SalaService, private tostr: ToastrService
  ) { }

  ngOnInit() {
    const x = this.salaService.getData();
    x.snapshotChanges().subscribe(item => {
      this.salasLista = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$codigoSala'] = element.key;
        this.salasLista.push(y as Sala);
      });
    });
  }

  editarDisciplina(sala: Sala) {
    this.salaService.salaSelecionada = Object.assign({}, sala);
  }

  deletarDisciplina(codigoSala: string) {
    if (confirm('Deseja realmente excluir este registro?') === true) {
      this.salaService.deletarSala(codigoSala);
      this.tostr.success('Registro deletado.');
    }
  }

}
