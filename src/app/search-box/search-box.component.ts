import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  locationError: string = "Geolocation is not suported by this browser."
  lat: any;
  lng: any;

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((values) => {
        this.lat = values?.coords?.latitude
        this.lng = values?.coords?.longitude;
      });
    } else {
      this.locationError;
    }
  }


  showAllBins() {

  }
}
