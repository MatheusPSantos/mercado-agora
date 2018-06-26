import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MercadosPage } from './mercados';

@NgModule({
  declarations: [
    MercadosPage,
  ],
  imports: [
    IonicPageModule.forChild(MercadosPage),
  ],
})
export class MercadosPageModule {}
