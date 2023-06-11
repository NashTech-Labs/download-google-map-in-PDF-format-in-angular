import { Component, ElementRef, ViewChild } from '@angular/core';
import { MapAnchorPoint, MapInfoWindow } from '@angular/google-maps';
import html2canvas from 'html2canvas';

import  { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps-in-angular';
  @ViewChild('gMap') pdfTable!: ElementRef;
  @ViewChild(MapInfoWindow) markerWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
      lat: 23,
      lng: 81
  };
  markers: google.maps.LatLngLiteral[] = [
    {
		  lat: 28.679079,
		  lng: 77.069710,
	  },
	  {
		  lat: 	30.525005,
		  lng: 75.890121,
	  },
    {
      lat: 24.794500,
      lng: 73.055000,
    },
    {
      lat: 26.850000,
      lng: 80.949997,
    }
  ];
  zoom = 5;

  openMarkerWindow(marker: MapAnchorPoint) {
      if (this.markerWindow != undefined){
        this.markerWindow.open(marker);
      }
  }

  public openPDF(): void {
   let DATA: any = document.getElementById('gMap');
   let PDF = new jsPDF('p','px','a1')
   PDF.html(DATA,{callback:(pdf)=>{
   pdf.save('success.pdf')
}})

  }
}
