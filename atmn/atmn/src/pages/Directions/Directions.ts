import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    LatLng,
    CameraPosition,
    MarkerOptions,
    Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the Directions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google;
declare var marker: Marker;

@Component({
    selector: 'page-Directions',
    templateUrl: 'Directions.html'
})
export class DirectionsPage {


    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, private googleMaps: GoogleMaps, public platform: Platform, private geolocation: Geolocation) {
        
        
        
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DirectionsPage');
    }

    
    ngAfterViewInit() {
        this.loadMap();
    }

    loadMap() {

        
        // make sure to create following structure in your view.html file
        // and add a height (for example 100%) to it, else the map won't be visible
        // <ion-content>
        //  <div #map id="map" style="height:100%;"></div>
        // </ion-content>

        // create a new map by passing HTMLElement
        let element: HTMLElement = document.getElementById('map');

        let map: GoogleMap = this.googleMaps.create(element);

        // listen to MAP_READY event
        // You must wait for this event to fire before adding something to the map or modifying it in anyway
        map.one(GoogleMapsEvent.MAP_READY).then(
            () => {
                console.log('Map is ready!');
                // Now you can add elements to the map like the marker
            }
        );
        
        // create LatLng object
        let ionic: LatLng = new LatLng(this.navParams.get('longitude'), this.navParams.get('latitude'));

        

        // create CameraPosition
        let position: CameraPosition = {
            target: ionic,
            zoom: 18,
            tilt: 30
        };

        // move the map's camera to position
        map.moveCamera(position);

        // create new marker
        let markerOptions: MarkerOptions = {
            position: ionic,
            title: this.navParams.get('enterprise') + '\n Cliquez ici pour les directions!'
        };
        
        map.addMarker(markerOptions)
            .then((marker) => {
                marker.showInfoWindow();
            });
        map.getMyLocation();
        //Verify longitude and latitude
        
            let toast = this.toastCtrl.create({
                message: 'Si la location n apparait pas, faites retour puis revenez',
                duration: 2000
            });
            toast.present();
        

    }
    
    
    

}
