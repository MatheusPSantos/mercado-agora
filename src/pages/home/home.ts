import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  // apresentar o menu modal
  presentMenuModal() {
    let menuModal = this.modalCtrl.create(MenuModalPage);
    menuModal.present();
  }  
}

@Component({
  selector: 'menu-modal',
  templateUrl: 'menu-modal.html',
})

export class MenuModalPage {
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
  ){}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
