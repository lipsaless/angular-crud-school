import { Component, OnInit } from '@angular/core';

import { AlunoService } from './crud/aluno.service';
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.html',
  styleUrls: ['./alunos.css'],
  providers: [AlunoService]
})
export class AlunosComponent implements OnInit {

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
  }

}
