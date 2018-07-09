import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { AcercaPage } from '../pages/acerca/acerca';
import { GaleriaPage } from '../pages/galeria/galeria';
import { RegisterPage} from '../pages/register/register';
import { RutasPage } from '../pages/rutas/rutas';
import { LugaresPage } from '../pages/lugares/lugares';
import { PrincipalPage } from '../pages/principal/principal';
import { DetalleslugarPage } from '../pages/detalleslugar/detalleslugar';
import { DetalleRutaPage } from '../pages/detalle-ruta/detalle-ruta';
import { DetalleGaleriaPage } from '../pages/detalle-galeria/detalle-galeria';
import { VideoIntroPage } from '../pages/video-intro/video-intro';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  LoginPage,
  AcercaPage,
  GaleriaPage,
  RegisterPage,
  RutasPage,
  LugaresPage,
  PrincipalPage,
  DetalleslugarPage,
  DetalleRutaPage,
  DetalleGaleriaPage,
  VideoIntroPage
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  LoginPage,
  AcercaPage,
  GaleriaPage,
  RegisterPage,
  RutasPage,
  LugaresPage,
  PrincipalPage,
  DetalleslugarPage,
  DetalleRutaPage,
  DetalleGaleriaPage,
  VideoIntroPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
