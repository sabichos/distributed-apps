import { Component, Input } from '@angular/core';
import { IUserDetails } from 'src/app/models/user-details';

@Component({
  selector: 'user-details',
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent {
  @Input() user?: IUserDetails;

}
