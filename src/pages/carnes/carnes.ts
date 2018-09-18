import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';


/**
 * Generated class for the CarnesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carnes',
  templateUrl: 'carnes.html',
})
export class CarnesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarnesPage');
  }
  showAlert_Chorizo() {
    const alert = this.alertCtrl.create({
      title: 'Ótima Escolha!',
      subTitle: 'Prato recomendado pela Revista Quatro Rodas',
      buttons: ['Adicionar à reserva']
    });
    alert.present();
  }

}
