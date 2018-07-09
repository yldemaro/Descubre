import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleslugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-detalleslugar',
 	templateUrl: 'detalleslugar.html',
 })
 export class DetalleslugarPage {

 	id:number=0;
 	nombre:string='';
 	ubicacion:string='';
 	clima:string='';
 	TemperaturaPromedio:string='';
 	Temporada:string='';
 	Accesoviaterrestre:string='';
 	img:string=''

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.id=this.navParams.get('id');
 		this.nombre=this.navParams.get('nombre');
 		console.log(this.nombre);
 		this.ubicacion=this.navParams.get('ubicacion');
 		this.clima=this.navParams.get('clima');
 		this.TemperaturaPromedio=this.navParams.get('TemperaturaPromedio');
 		this.Temporada=this.navParams.get('Temporada');
 		this.Accesoviaterrestre=this.navParams.get('Accesoviaterrestre');
 		this.img=this.navParams.get('img');
 	}

 }
