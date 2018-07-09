import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleGaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-detalle-galeria',
 	templateUrl: 'detalle-galeria.html',
 })
 export class DetalleGaleriaPage {
 	nombre:string='';
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.nombre=this.navParams.get('Ruta');
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad DetalleGaleriaPage');
 	}

 }
