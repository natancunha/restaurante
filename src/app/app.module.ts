import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardapioPage } from '../pages/cardapio/cardapio'
import { MapaPage } from '../pages/mapa/mapa';
import { ContatoPage } from '../pages/contato/contato';
import { CarnesPage } from '../pages/carnes/carnes';
import { PeixesPage } from '../pages/peixes/peixes';
import { SaladasPage } from '../pages/saladas/saladas';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CardapioPage,
    MapaPage,
    ContatoPage,
    CarnesPage,
    PeixesPage,
    SaladasPage,
    BebidasPage,
    SobremesasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CardapioPage,
    MapaPage,
    ContatoPage,
    CarnesPage,
    PeixesPage,
    SaladasPage,
    BebidasPage,
    SobremesasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
