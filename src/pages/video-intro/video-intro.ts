import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-video-intro',
	templateUrl: 'video-intro.html',
})
export class VideoIntroPage {
	video: string ="assets/video/video.mp4";

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	irahome(){
		this.navCtrl.push(HomePage);
	}

}
