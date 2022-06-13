import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(environment.endpoints.user);
  }

}
