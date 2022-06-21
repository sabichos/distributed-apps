import { Component, Input } from '@angular/core';
import { ITransaction } from 'src/app/models/customer-details';

@Component({
  selector: 'app-transactions',
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"]
})
export class TransactionsComponent {

  @Input() transactions: Array<ITransaction> = [];


}
