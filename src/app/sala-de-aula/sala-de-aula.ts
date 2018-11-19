import { Component, OnInit } from '@angular/core';

import { SalaService } from './crud/sala-de-aula.service';
@Component({
  selector: 'app-sala',
  templateUrl: './sala-de-aula.html',
  styleUrls: ['./sala-de-aula.css'],
  providers: [SalaService]
})
export class SalaComponent implements OnInit {

  constructor(private salaService: SalaService) { }

  ngOnInit() {
  }

}
