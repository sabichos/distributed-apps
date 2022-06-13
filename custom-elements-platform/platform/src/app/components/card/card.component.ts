import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  @Input() title?: string;
  mode = { name: "viewer", action: "edit" };

  toggleMode() {
    if (this.mode.name === "viewer")
      this.mode = { name: "editor", action: "close" };
    else
      this.mode = { name: "viewer", action: "edit" };
  }
}
