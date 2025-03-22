import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const apiKey = environment.googleMapsApiKey;
    const baseUrl = 'https://www.google.com/maps/embed/v1/place';
    const query = 'Fresh+and+Best+Cafe+2,388+9th+St,Oakland+CA+94607';
    
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `${baseUrl}?key=${apiKey}&q=${query}&zoom=17&maptype=roadmap`
    );
  }
}
