import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //-23,960326, -46,336887
  //latitude:number= -23.990326;
  //longitude:number= -23.990326;
  latitude: number;
  longitude: number;//*/
  map:any;

  latitudeAtual: number;
  longitudeAtual: number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
  }

  ionViewDidLoad(){

  this.geolocation.getCurrentPosition()
    .then(r => {this.latitudeAtual = r.coords.latitude; this.longitudeAtual = r.coords.longitude;});

    /*this.geolocation.getCurrentPosition()
    .then(r => {this.latitude = r.coords.latitude; this.longitude = r.coords.longitude;});///
    /*this.geolocation.getCurrentPosition()
    .then(r => {this.plotarGrafico(r);});
    */
  }
//*/
  private plotarGrafico(r:any):void{
    //alert("zzz");
    //console.log(r);
    this.latitude = r.coords.latitude;
    this.longitude = r.coords.longitude;
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: this.latitude, lng: this.longitude}
    });
    var marker = new google.maps.Marker({
      position: {lat: this.latitude, lng: this.longitude},
      map: this.map
    });
    }

    private criarGrafico():void{    
      /*
      let lat :number= document.getElementById('lat').value;
      let long:number= document.getElementById('long').value;
      */
      //alert(longitude);
      //let MyPosition= {lat:0, lng:0}
      let MyPosition= {lat: this.latitude, lng: this.longitude}
      //alert(MyPosition.lat);

      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        //center: MyPosition
        center: MyPosition
      });
      var marker = new google.maps.Marker({
        position: MyPosition,
        map: this.map
      });      
    }
  }