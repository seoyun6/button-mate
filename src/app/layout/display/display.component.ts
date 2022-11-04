import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  host: {
    '[class.display]': 'true'
  },
})
export class DisplayComponent implements OnInit {

  btnType: string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeType(color: string) {
    this.btnType = color;
  }

}
