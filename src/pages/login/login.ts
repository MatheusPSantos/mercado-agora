import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
//import { Usuario } from '../../models/Usuario';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public facebook: Facebook
  ) {
    
  }

  login() {
    firebase.auth().useDeviceLanguage();
    
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      // e-mail de verificação é enviado ao usuário
      user.sendEmailVerification().then(function() {

      }).catch(function(error){
        console.log(error);
      });
      
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });

  }
// método para chamar a api do facebook e salvar o usuário no banco
/*  login() {
    let permissions = new Array<string>();
    permissions = ["public_profile", "email"];

    this.facebook.login(permissions)
      .then((response) => {
        let params = new Array<string>();

        this.facebook.api("/me?fields=name, email", params)
          .then(res => {
            // usando o model para criar o usuario
            let usuario = new Usuario();

            usuario.name = res.name;
            usuario.email = res.email;
            usuario.senha = res.id;
            usuario.login = res.email;

            this.logar(usuario);
          }, (error) => {
            alert(error);
            console.log('ERRO LOGIN: ', error);
          })
      }, (error)=>{
        alert(error);
      });
  }

  logar(usuario: Usuario) {
    this.salvarService.salvarFacebook(usuario)
      .then(()=>{
        console.log('Usuario cadastrado via facebook com sucesso');
      })
  }
/*
  login() {
    let provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().signInWithRedirect(provider)
      .then(()=>{
        firebase.auth().getRedirectResult()
          .then((result)=>{
            alert(JSON.stringify(result));
          }).catch(function(error) {
            alert(JSON.stringify(error))
          });
      })
  }
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
