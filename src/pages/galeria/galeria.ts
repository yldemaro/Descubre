import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalleGaleriaPage } from '../detalle-galeria/detalle-galeria';

 @IonicPage()
 @Component({
 	selector: 'page-contacto',
 	templateUrl: 'galeria.html',
 })
 export class GaleriaPage {

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ContactoPage');
 	}

 	detalleRuta(ruta){
 		this.navCtrl.push(DetalleGaleriaPage, {
 			Ruta:ruta
 		});
 	}

 }
