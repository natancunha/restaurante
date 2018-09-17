import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CardapioPage } from '../cardapio/cardapio'
import { MapaPage } from '../mapa/mapa'
import { ContatoPage } from '../contato/contato'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContatoPage;
  tab2Root = CardapioPage;
  tab3Root = MapaPage;

  constructor() {

  }
}
