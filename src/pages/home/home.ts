import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import {RegisterPage} from '../register/register';
import {LoginPage} from '../login/login';
import {LugaresPage} from '../lugares/lugares';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {
	}

	registrar(){
		this.navCtrl.push(RegisterPage);
	}
	entrar(){
		this.navCtrl.push(LoginPage);
	}
	lugares(){
		this.navCtrl.push(LugaresPage);
	}
}
