import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleRutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-detalle-ruta',
 	templateUrl: 'detalle-ruta.html',
 })
 export class DetalleRutaPage {

 	rutas:string='';

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.rutas=this.navParams.get('Ruta');
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad DetalleRutaPage');
 	}

 }
