import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhoneApiService {

  constructor(private http: HttpClient) { }

  
  sendVerificationCode(): Observable<void> {
    return this.http.get<void>(environment.endpoints.phoneVerification);
  }

  verifyCode(code: string): Observable<void> {
    return this.http.post<void>(environment.endpoints.phoneVerification, { code });
  }

}
