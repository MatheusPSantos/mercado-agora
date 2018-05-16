import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  
  }

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
