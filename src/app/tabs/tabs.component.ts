import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRouter } from '../app.routes';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  navLinks: any[];
  tabIndex = 0;

  constructor(
    private router: AppRouter,
    private routerAngular: Router
  ) { 
    this.navLinks = [
      {
        label: 'Alunos',
        link: '/alunos',
        index: 0
      },
      {
        label: 'Professores',
        link: '/professores',
        index: 1
      },
      {
        label: 'Disciplinas',
        link: '/disciplinas',
        index: 2
      },
      {
        label: 'Turmas',
        link: '/turmas',
        index: 3
      },
      {
        label: 'Criar sala de aula',
        link: '/criar-sala',
        index: 4
      }
    ];

    this.trocar(this.tabIndex);
  }

  ngOnInit() {
    this.routerAngular.events.subscribe(() => {
      // alert('teste');
    });
  }

  trocar(tab) {
    this.tabIndex = tab;
    this.routerAngular.navigateByUrl(this.navLinks[tab].link);
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent =>', tabChangeEvent);
  }

}
