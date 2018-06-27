import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';

import { MenuModalPage } from './../pages/home/home';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CartPage } from './../pages/cart/cart';
import { MercadosPage } from './../pages/mercados/mercados';
import { TabsPage } from './../pages/tabs/tabs';
import { PromosPage } from '../pages/promos/promos';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCddXR7I8GkLe9rdva6-VIiCDxk-oDTg90",
  authDomain: "mercadoagora-1f3a7.firebaseapp.com",
  databaseURL: "https://mercadoagora-1f3a7.firebaseio.com",
  projectId: "mercadoagora-1f3a7",
  storageBucket: "mercadoagora-1f3a7.appspot.com",
  messagingSenderId: "585627113170"
});

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuModalPage,
    TabsPage,
    MercadosPage,
    CartPage,
    PromosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true,
    },
    {
      links: [
        { component: MenuModalPage, name: 'MenuModalPage', segment: 'menu-modal' },
      ]
    }
  )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuModalPage,
    TabsPage,
    PromosPage,
    MercadosPage,
    CartPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
