import { Component, OnInit } from '@angular/core';
import { ICustomerDetails } from 'src/app/models/customer-details';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  customerDetails?: ICustomerDetails;

  ngOnInit(): void {
    this.apiService.getCustomerDetails().subscribe(res => {
      this.customerDetails = res;
    });
  }

}
