import { CartPage } from './../cart/cart';
import { MercadosPage } from './../mercados/mercados';
import { PromosPage } from './../promos/promos';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  promoPage =  PromosPage;
  mercadosPage = MercadosPage;
  cartPage = CartPage;

}
