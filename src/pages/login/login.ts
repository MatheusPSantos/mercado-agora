import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import firebase from 'firebase';
import { HomePage } from '../home/home';
//import { Usuario } from '../../models/Usuario';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,) {
    
  }

  // autenticação com o Facebook
  async loginFacebook() {
    firebase.auth().useDeviceLanguage();
    
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

      });
      console.log('redirecionado...');
      this.navCtrl.setRoot(HomePage);  // setando a página Inicial como Root
  }

  // autenticação com a conta do Google
  async loginGoogle() {
    // instancia do objeto provedor do google
    var provider = new firebase.auth.GoogleAuthProvider();
    // redirecionando para página de solicitação do login
    firebase.auth().signInWithRedirect(provider);
    // recuperando o token do provedor do Google
    firebase.auth().getRedirectResult()
      .then(function(result) {
        if(result.credential) {
          //Isso fornece um token do Google Access.
          var token = result.credential.accessToken;
        }
        // o usuário que está entrando
        var user = result.user;
        
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // erro no e-mail
        var email = error.email;
        // a credencial de autenticação que foi usada
        var credential = error.credential;

      });
    console.log('redirecionado ....');
    this.navCtrl.setRoot(HomePage); // setando a página Inicial como Root
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
