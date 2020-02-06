import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent {
  @Input() title: string;
  @Output() showThem = new EventEmitter<any>();

  constructor() { }

  show() {
    this.showThem.emit();
  }

}
