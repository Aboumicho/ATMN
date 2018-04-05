import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { DirectionsPage } from "../Directions/Directions";

/*
  Generated class for the EEB page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-EEB',
    templateUrl: 'EEB.html'
})
export class EEBPage {
       

    AlloProf = '1-888 776-4455';
    phonenumber = [];

    constructor(private call: CallNumber, public navCtrl: NavController) {
         
    }

    async callNumber(phonenumber):Promise<any>{
        try {
            await this.call.callNumber(String(phonenumber), true);
        }
        catch (e) {
            console.error(e);
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EEBPage');
    }

    DirectionsloadPage(longitude, latitude, enterprise) {
        

        this.navCtrl.push(DirectionsPage,
            {
                longitude,
                latitude,
                enterprise
            }
        );
    }
}
