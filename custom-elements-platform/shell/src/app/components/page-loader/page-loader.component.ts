import { Component } from '@angular/core';

@Component({
  selector: 'page-loader',
  template: `
  <div id="page-loader">
    <img id="loader" src="assets/loader.svg" alt="loading" />
  </div>
  `,
  styles: [
    `#page-loader {  width: 100%;  height: 100vh;  display: flex;  align-items: center;  justify-content: center;  position: fixed;}`,
    `#loader { width: 33%;  }`
  ]
})
export class PageLoaderComponent { }
