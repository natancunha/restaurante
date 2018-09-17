import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarnesPage } from './carnes';

@NgModule({
  declarations: [
    CarnesPage,
  ],
  imports: [
    IonicPageModule.forChild(CarnesPage),
  ],
})
export class CarnesPageModule {}
