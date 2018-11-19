import { Component, OnInit } from '@angular/core';

import { ProfessorService } from './crud/professor.service';
@Component({
  selector: 'app-professores',
  templateUrl: './professores.html',
  styleUrls: ['./professores.css'],
  providers: [ProfessorService]
})
export class ProfessoresComponent implements OnInit {

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
  }

}
