import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router as AngularRouter } from '@angular/router';

// Plugin mensagens
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  // variáveis
  email: any;
  senha: any;
  @Output() logged = new EventEmitter();

  // é guardado na variável btnRegistrar o botão principal de registro
  @ViewChild('btnRegistro') btnRegistrar: ElementRef;

  constructor(
    private authService: AuthService,
    private angularRouter: AngularRouter,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  registrarUsuario() {
    // a função registro() do serviço de autenticação é acionada, passando-se email e senha como parâmetros
    this.authService.registro(this.email, this.senha)
    .then((res) => {
      // após ter sucesso o usuário é direcionado para "/alunos" que é a página principal
      this.angularRouter.navigate(['/alunos']);
      this.logged.emit(true);
    }).catch((err) => {
      console.log('Erro ao inserir usuário');
      console.log(err);
      // caso dê erro mensagem de erro é mostrada
      this.toastr.warning(err.message);
    });
  }
}
