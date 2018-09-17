import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeixesPage } from './peixes';

@NgModule({
  declarations: [
    PeixesPage,
  ],
  imports: [
    IonicPageModule.forChild(PeixesPage),
  ],
})
export class PeixesPageModule {}
