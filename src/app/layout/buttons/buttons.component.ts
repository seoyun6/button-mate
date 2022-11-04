import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  host: {
    '[class.buttons]': 'true'
  },
})
export class ButtonsComponent implements OnInit {

  @Output() changeTypeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(color: string) {
   this.changeTypeEvent.emit("color");
  }
}
