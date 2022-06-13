import { Component, OnInit } from '@angular/core';
import { ComponentLoaderService } from 'src/app/services/component-loader.service';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  constructor(private componentLoader: ComponentLoaderService) { }
  async ngOnInit(): Promise<void> {
    await this.componentLoader.loadComponent("secure-phone");
  }

}
