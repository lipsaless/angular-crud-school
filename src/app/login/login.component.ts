import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';

// Minhas rotas
import { Router as AngularRouter } from '@angular/router';

// Plugin mensagens
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // variáveis tem o tipo any que signifca qualquer coisa
  email: any;
  senha: any;
  @Output() logged = new EventEmitter();

  constructor(
    private authService: AuthService,
    private angularRouter: AngularRouter,
    private msg: ToastrService
  ) { }

  ngOnInit() {
  }

  logar() {
    // Valida se tem e-mail no formulário
    if (!this.email) {
      // Mensagem
      this.msg.warning('Ops! Você esqueceu de informar o e-mail.');
    }

    // Valida se tem senha no formulário
    if (!this.senha) {
      // Mensagem
      this.msg.warning('Ops! Você esqueceu de informar a senha.');
    }
    // a função logar() do serviço de autenticação é acionada, passando-se email e senha como parâmetros
    this.authService.logar(this.email, this.senha)
    // a requisição é enviada
    .then((res) => {
      // é criado um usuário no localStorage do navegador
      localStorage.setItem('user_school@user', JSON.stringify(res));
      // após ter sucesso o usuário é direcionado para "/alunos" que é a página principal
      this.angularRouter.navigate(['/alunos']);
      this.logged.emit(true);
    }).catch((err) => {
      console.log('Erro ao autenticar usuário');
      console.log(err);
      // caso dê erro de autenticação o usuário volta para a tela de login
      this.angularRouter.navigate(['/login']);
    });
  }
}
