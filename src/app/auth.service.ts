import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  registro(email: any, senha: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }

  logar(email: any, senha: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }

  usuarioLogado() {
    return this.afAuth.authState.map(auth => auth);
  }

  sair() {
    return this.afAuth.auth.signOut();
  }
}
