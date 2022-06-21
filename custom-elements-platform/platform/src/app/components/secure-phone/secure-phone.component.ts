import { Component } from '@angular/core';
import { PhoneApiService } from 'src/app/services/phone-api/phone-api.service';

@Component({
  selector: 'secure-phone',
  templateUrl: "./secure-phone.component.html",
  styleUrls: ["./secure-phone.component.css"]
})
export class SecurePhoneComponent {
  step: number = 0;
  constructor(private phoneApi: PhoneApiService) { }

  sendCode() {
    this.phoneApi.sendVerificationCode().subscribe(() => {
      this.step = 1;
    })
  }
  verifyCode(code: string) { 
    this.phoneApi.verifyCode(code).subscribe(() => {
      this.step = 2;
    })
  }
}
