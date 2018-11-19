import { Component, OnInit } from '@angular/core';

import { TurmaService } from './crud/turma.service';
@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.html',
  styleUrls: ['./turmas.css'],
  providers: [TurmaService]
})
export class TurmasComponent implements OnInit {

  constructor(private turmaService: TurmaService) { }

  ngOnInit() {
  }

}
