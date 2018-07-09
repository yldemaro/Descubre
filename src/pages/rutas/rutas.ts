import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleRutaPage } from '../detalle-ruta/detalle-ruta';

@IonicPage()
@Component({
	selector: 'page-rutas',
	templateUrl: 'rutas.html',
})
export class RutasPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RutasPage');
	}

	detalleRuta(ruta){
		console.log(ruta);
		this.navCtrl.push(DetalleRutaPage, {
			Ruta:ruta
		});
	}

}
