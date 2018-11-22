import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private firebase: AngularFireDatabase
  ) { }

  registro(email: any, senha: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }

  verificaSeExisteCadastro(email: any, senha: any) {
    // const user = this.firebase.database.ref('/users/' + email);
    // user.subscribe(data => {
    //   if (data.$value !== null) {
    //     console.log('Usuário não existe');
    //   } else {
    //     console.log('Usuário já existe');
    //   }
    // });
  }

  logar(email: any, senha: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }

  logarGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  usuarioLogado() {
    return this.afAuth.authState.map(auth => auth);
  }

  sair() {
    return this.afAuth.auth.signOut();
  }
}
