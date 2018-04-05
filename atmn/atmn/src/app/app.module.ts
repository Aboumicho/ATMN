import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CallNumber} from '@ionic-native/call-number'
import { HomePage } from '../pages/home/home';
import { EEBPage } from '../pages/EEB/EEB';
import { DépannagePage } from '../pages/Dépannage/Dépannage';
import { DependancePage } from '../pages/Dependance/Dependance';
import { HebergementPage } from '../pages/Hebergement/Hebergement';
import { IajPage } from '../pages/iaj/iaj';
import { VasPage } from '../pages/vas/vas';
import { JdPage } from '../pages/jd/jd';
import { CciPage } from '../pages/cci/cci';
import { SosPage } from '../pages/sos/sos';
import { HiPage } from '../pages/hi/hi';
import { DirectionsPage } from '../pages/Directions/Directions';
import { SMPage } from '../pages/SM/SM';
import { SASPage } from '../pages/SAS/SAS';

import { AgmCoreModule} from 'angular2-google-maps/core';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
      HomePage,
      EEBPage,
      DépannagePage,
      DependancePage,
      DirectionsPage,
      HebergementPage,
      IajPage,
      JdPage,
      CciPage,
      SosPage,
      HiPage,
      VasPage,
      SMPage,
      SASPage
      
  ],
  imports: [
      BrowserModule,
      HttpModule,
      IonicModule.forRoot(MyApp),
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDi9HJWiYOTrvtk0a_hWKcUd-AYiTwgoew'
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomePage,
      EEBPage,
      DépannagePage,
      DependancePage,
      DirectionsPage,
      HebergementPage,
      IajPage,
      JdPage,
      CciPage,
      SosPage,
      HiPage,
      VasPage,
      SMPage,
      SASPage

  ],
  providers: [StatusBar,
      SplashScreen,
      GoogleMaps,
      Geolocation,
      { provide: ErrorHandler, useClass: IonicErrorHandler },
      CallNumber
  ]
      
})
export class AppModule {}
