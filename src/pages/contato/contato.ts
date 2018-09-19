import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';



/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
             private callNumber: CallNumber,private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoPage');
  }

  callMyNumber(){
    this.callNumber.callNumber("996524207",true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));

    //alert("alerta de ligação")
  }

  sendEmail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'natancunha@gmail.com',
       subject: 'Contato',
       body: 'Olá, gostaria de entrar em contato com o restaurante',
       isHtml: true
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
