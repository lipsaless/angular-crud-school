import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router as AngularRouter } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  email: any;
  senha: any;
  @Output() logged = new EventEmitter();

  @ViewChild('btnRegistro') btnRegistrar: ElementRef;

  constructor(
    private authService: AuthService,
    private angularRouter: AngularRouter,
    private message: FlashMessagesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  registrarUsuario() {
    this.authService.registro(this.email, this.email)
    .then((res) => {
      // this.message.show('Usuário criando com sucesso', {cssClass: 'alert-success', timeout: 4000});
      this.angularRouter.navigate(['/alunos']);
      this.logged.emit(true);
    }).catch((err) => {
      console.log('Erro ao inserir usuário');
      console.log(err);
      this.toastr.warning(err.message);
    });
  }
}
