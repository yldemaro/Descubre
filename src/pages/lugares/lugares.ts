import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';
import { DetalleslugarPage } from '../detalleslugar/detalleslugar';

@IonicPage()
@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html',
})
export class LugaresPage {

  lugares:any[]=[
  {
    id:1, 
    nombre:'HUANCHACO', 
    ubicacion:'Huanchaco, Trujillo',
    clima:'Templado o soleado durante todo el año',
    TemperaturaPromedio:'En verano la temperatura promedio es de 24º. Se puede visitar todo el año',
    Temporada:'Todo el año',
    Accesoviaterrestre:'Se encuentra a 10 minutos de la ciudad de Trujillo',
    img:'assets/imgs/fondoprincipal.jpg' 
  },
  {
    id:2, 
    nombre:'CENTRO HISTÓRICO', 
    ubicacion:'Huanchaco, Trujillo',
    clima:'Templado o soleado durante todo el año',
    TemperaturaPromedio:'En verano la temperatura promedio es de 24º. Se puede visitar todo el año',
    Temporada:'Todo el año',
    Accesoviaterrestre:'Se encuentra a 10 minutos de la ciudad de Trujillo',
    img:'assets/imgs/estatuacentrohistorico.jpg'  
  },
  {
    id:3, 
    nombre:'CHAN CHAN', 
    ubicacion:'Huanchaco, Trujillo',
    clima:'Templado o soleado durante todo el año',
    TemperaturaPromedio:'En verano la temperatura promedio es de 24º. Se puede visitar todo el año',
    Temporada:'Todo el año',
    Accesoviaterrestre:'Se encuentra a 10 minutos de la ciudad de Trujillo' ,
    img:'assets/imgs/chanchan.jpg'
  },
  {
    id:4, 
    nombre:'HUACA DEL SOL', 
    ubicacion:'Huanchaco, Trujillo',
    clima:'Templado o soleado durante todo el año',
    TemperaturaPromedio:'En verano la temperatura promedio es de 24º. Se puede visitar todo el año',
    Temporada:'Todo el año',
    Accesoviaterrestre:'Se encuentra a 10 minutos de la ciudad de Trujillo',
    img:'assets/imgs/huacadelsol.jpg'
  },
  {
    id:5, 
    nombre:'COMPLEJO ARQUEÓLOGICO EL BRUJO', 
    ubicacion:'Huanchaco, Trujillo',
    clima:'Templado o soleado durante todo el año',
    TemperaturaPromedio:'En verano la temperatura promedio es de 24º. Se puede visitar todo el año',
    Temporada:'Todo el año',
    Accesoviaterrestre:'Se encuentra a 10 minutos de la ciudad de Trujillo',
    img:'assets/imgs/brujo/1.jpg'
  },
  {
    id:6, 
    nombre:'CABALLITOS DE TOTORA', 
    ubicacion:'Huanchaco, Trujillo',
    clima:'Templado o soleado durante todo el año',
    TemperaturaPromedio:'En verano la temperatura promedio es de 24º. Se puede visitar todo el año',
    Temporada:'Todo el año',
    Accesoviaterrestre:'Se encuentra a 10 minutos de la ciudad de Trujillo',
    img:'assets/imgs/totora/1.jpg'
  },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugaresPage');
  }

  principal(){
  	this.navCtrl.push(PrincipalPage);
  }


  probando(lugar){
    this.navCtrl.push(DetalleslugarPage, {
      id:lugar.id,
      nombre:lugar.nombre,
      ubicacion:lugar.ubicacion,
      clima:lugar.clima,
      TemperaturaPromedio:lugar.TemperaturaPromedio,
      Temporada:lugar.Temporada,
      Accesoviaterrestre:lugar.Accesoviaterrestre,
      img:lugar.img
    });
  }

}
