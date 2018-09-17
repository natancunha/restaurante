import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarnesPage } from '../carnes/carnes';
import { PeixesPage } from '../peixes/peixes';
import { SaladasPage } from '../saladas/saladas';
import { BebidasPage } from '../bebidas/bebidas';
import { SobremesasPage } from '../sobremesas/sobremesas';

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

  gotoCarnes(){
    this.navCtrl.push(CarnesPage);
  }
  
  gotoPeixes(){
    this.navCtrl.push(PeixesPage);
  }

  gotoSaladas(){
    this.navCtrl.push(SaladasPage);
  }

  gotoBebidas(){
    this.navCtrl.push(BebidasPage);
  }

  gotoSobremesas(){
    this.navCtrl.push(SobremesasPage);
  }

}
