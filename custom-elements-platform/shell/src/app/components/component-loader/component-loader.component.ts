import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentLoaderService } from 'src/app/services/component-loader.service';

@Component({
  selector: "component-loader",
  template: "<ng-content></ng-content>",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class ComponentLoaderComponent implements OnInit {
  constructor(private element: ElementRef, private route: ActivatedRoute, private loaderService: ComponentLoaderService) { }
  ngOnInit(): void {
    const component = this.route.snapshot.url.slice(-1)[0].path;
    this.element.nativeElement.innerHTML = `<${component}></${component}>`;
    this.loaderService.loadComponent(component);
  }
}
