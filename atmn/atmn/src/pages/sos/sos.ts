import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { DirectionsPage } from "../Directions/Directions";

/*
  Generated class for the Dépannage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-sos',
    templateUrl: 'sos.html'
})
export class SosPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private call: CallNumber) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SosPage');
    }
    async callNumber(phonenumber): Promise<any> {
        try {
            await this.call.callNumber(String(phonenumber), true);
        }
        catch (e) {
            console.error(e);
        }
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