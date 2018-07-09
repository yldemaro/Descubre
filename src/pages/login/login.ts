import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LugaresPage } from '../lugares/lugares';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	constructor(public navCtrl: NavController, public navParams: NavParams,
		public loadingCtrl: LoadingController) {
	}


	iraprincipal(){
		const loader = this.loadingCtrl.create({
			content: "Please wait...",
			duration: 3000
		});
		loader.present();

		this.navCtrl.push(LugaresPage);
	}

}
