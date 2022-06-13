import { Component, Input } from '@angular/core';
import { ICustomerConnection } from 'src/app/models/customer-details';
import { ApiService } from 'src/app/services/api/api.service';

interface IStringKeys { [key: string]: string; }


@Component({
  selector: 'app-connections',
  templateUrl: "./connections.component.html",
  styleUrls: ["./connections.component.css"]
})
export class ConnectionsComponent {

  constructor(private apiService: ApiService) { }
  @Input() connections: Array<ICustomerConnection> = [];
  connectionTypes: IStringKeys = {
    person: "iconPerson",
    place: "iconPlace"
  };

  removeConnection(connection: ICustomerConnection, index: number) {
    this.apiService.removeCustomerConnection(connection).subscribe(() => {
      delete this.connections[index];
    });
  }

}
