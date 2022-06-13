import { Renderer2, Inject, Injectable, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  private renderer: Renderer2;
  constructor(@Inject(DOCUMENT) private document: Document, private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public loadComponent(name: string): Promise<void> {
    return new Promise(resolve => {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = `${environment.componentPath}/${name}.js`;
      script.onload = () => { resolve(); };
      this.renderer.appendChild(this.document.body, script);
    });
  }
}
