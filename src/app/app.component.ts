import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogged: Boolean = false;

  constructor(
    private routerAngular: Router
  ) {
    this.verificarLogin();
  }

  isLogin() {
    return this.routerAngular.url === '/login';
  }

  isRegistro() {
    return this.routerAngular.url === '/registro';
  }

  logado(event) {
    this.isLogged = event;
  }

  verificarLogin() {
    const user = localStorage.getItem('user_school@user');

    if (user) {
      this.isLogged = true;
      return;
    }

    if (!this.isLogin() || !this.isRegistro) {
      this.routerAngular.navigate(['/']);
    }
  }
}
