import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICustomerConnection, ICustomerDetails, ICustomerIdentity, IOffer } from '../../models/customer-details';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCustomerDetails(): Observable<ICustomerDetails> {
    return this.http.get<ICustomerDetails>(environment.endpoints.customer);
  }

  sendVerificationCode(): Observable<void> {
    return this.http.get<void>(environment.endpoints.phoneVerification);
  }

  verifyCode(code: string): Observable<void> {
    return this.http.post<void>(environment.endpoints.phoneVerification, { code });
  }

  updateCustomerIdentity(customerDetails: ICustomerIdentity): Observable<void> {
    return this.http.post<void>(environment.endpoints.identity, customerDetails);
  }

  removeCustomerConnection(connection: ICustomerConnection): Observable<void> {
    return this.http.post<void>(environment.endpoints.connections, connection);
  }

  optin(offer: IOffer): Observable<void> {
    return this.http.post<void>(environment.endpoints.optin, offer);
  }
}
