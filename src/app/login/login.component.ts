import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router as AngularRouter } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  senha: any;
  @Output() logged = new EventEmitter();

  constructor(
    private authService: AuthService,
    private angularRouter: AngularRouter
  ) { }

  ngOnInit() {
  }

  logar() {
    this.authService.logar(this.email, this.email)
    .then((res) => {
      localStorage.setItem('user_school@user', JSON.stringify(res));
      this.angularRouter.navigate(['/alunos']);
      this.logged.emit(true);
    }).catch((err) => {
      console.log('Erro ao autenticar usuário');
      console.log(err);
      this.angularRouter.navigate(['/login']);
    });
  }
  
  logarComGoogle() {
    this.authService.logarGoogle();
  }
}
