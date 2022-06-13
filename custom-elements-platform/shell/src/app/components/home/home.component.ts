import { Component, OnInit } from '@angular/core';
import { IUserDetails } from 'src/app/models/user-details';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  user?: IUserDetails;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getUserDetails().subscribe(user => {
      this.user = user;
    })
  }
}
