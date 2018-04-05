import { Component } from '@angular/core';
import { EEBPage } from '../EEB/EEB';
import { DépannagePage } from '../Dépannage/Dépannage';
import { DependancePage } from '../Dependance/Dependance';
import { HebergementPage } from '../Hebergement/Hebergement';
import { IajPage } from '../iaj/iaj';
import { JdPage } from '../jd/jd';
import { CciPage } from '../cci/cci';
import { SosPage } from '../sos/sos';
import { HiPage } from '../hi/hi';
import { VasPage } from '../vas/vas';
import { DirectionsPage } from '../Directions/Directions';
import { SMPage } from '../SM/SM'
import { SASPage} from '../SAS/SAS';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  
  onLink(url: string) {
      window.open(url);
  }
  /**
   *************************ALL THE PAGE LOADERS***********************
   */
  EEBloadpage() {
      this.navCtrl.push(EEBPage);
  }

  Depannageloadpage() {
      this.navCtrl.push(DépannagePage);
  }

  Dependanceloadpage() {
      this.navCtrl.push(DependancePage);
  }

  Hebergementloadpage() {
      this.navCtrl.push(HebergementPage);
  }

 iajloadPage() {
      this.navCtrl.push(IajPage);
  }


  jdloadPage() {
      this.navCtrl.push(JdPage);
  }

  cciloadPage() {
      this.navCtrl.push(CciPage);
  }

  sosloadPage() {
      this.navCtrl.push(SosPage);
  }

  hiloadPage() {
      this.navCtrl.push(HiPage);
  }

  vasloadPage() {
      this.navCtrl.push(VasPage);
  }

  DirectionsloadPage() {
      this.navCtrl.push(DirectionsPage);
  }

  SMloadPage(){

      this.navCtrl.push(SMPage);
  }

  SASLoadPage(){
      this.navCtrl.push(SASPage);
  }

}