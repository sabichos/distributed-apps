import { Component, Input } from '@angular/core';
import { ICustomerIdentity } from "src/app/models/customer-details";
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'identity-details',
  templateUrl: "./identity-details.component.html",
  styleUrls: ["./identity-details.component.css"]
})
export class IdentityDetailsComponent {

  constructor(private apiService: ApiService) { }

  @Input() identity: ICustomerIdentity = { firstName: "", lastName: "" };



  handleChange(target: any) {
    this.identity[target.id as keyof ICustomerIdentity] = target.value;

  }

  updateIdentityDetails() {
    this.apiService.updateCustomerIdentity(this.identity);
  }

}
