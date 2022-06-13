import { Component, Input } from '@angular/core';
import { IOffer } from 'src/app/models/customer-details';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-offers',
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.css"]
})
export class OffersComponent {

  constructor(private apiService: ApiService) { }
  @Input() offers: Array<IOffer> = [];

  optin(offer: IOffer) {
    this.apiService.optin(offer).subscribe(() => {
      offer.optin = true;
    });
  }

}
