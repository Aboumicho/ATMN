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
    selector: 'page-Dépannage',
    templateUrl: 'Dépannage.html'
})
export class DépannagePage {

    constructor(private call: CallNumber, private navCtrl: NavController, private navParams: NavParams) {

    }

    async callNumber(phonenumber): Promise<any> {
        try {
            await this.call.callNumber(String(phonenumber), true);
        }
        catch (e) {
            console.error(e);
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DépannagePage');
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
