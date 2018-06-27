import { NavController, ModalController} from 'ionic-angular';
import { PromosPage } from './../promos/promos';
import { HomePage } from './../home/home';
import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  promoPage = PromosPage;
  mercadosPage = HomePage;
  cartPage = CartPage;
  perfilPage = MenuPerfilPage;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
  ){

  }
}

// Página de Perfil
@Component({
  selector: 'menu-perfil',
  templateUrl: 'menu-perfil.html',
})

export class MenuPerfilPage {
  constructor(){}
}