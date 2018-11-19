import { Component, OnInit } from '@angular/core';

import { DisciplinaService } from './crud/disciplina.service';
@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.html',
  styleUrls: ['./disciplinas.css'],
  providers: [DisciplinaService]
})
export class DisciplinasComponent implements OnInit {

  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit() {
  }

}
