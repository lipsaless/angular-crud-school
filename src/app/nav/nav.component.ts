import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logado: Boolean = false;
  nomeUsuario: string;
  emailUsuario: string;

  @Output() logged = new EventEmitter();

  constructor(
    private authService: AuthService,
    private routerAngular: Router
  ) { }

  ngOnInit() {
    this.authService.usuarioLogado().subscribe(auth => {
      if (auth) {
        this.logado = true;
        this.nomeUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      } else {
        this.logado = false;
      }
    });
  }

  sair() {
    this.logado = false;
    this.logged.emit(false);
    localStorage.removeItem('user_school@user');
    this.authService.sair();
    this.routerAngular.navigate(['/login']);
  }
}
