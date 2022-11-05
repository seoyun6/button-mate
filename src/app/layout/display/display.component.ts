import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonService } from 'src/common/button.service';

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

  constructor(private buttonService: ButtonService) { }

  ngOnInit(): void {
    this.buttonService.changeTypeEvent.subscribe((color: string) => {
      console.log('re : ', color)
      this.btnType = color;
    })
  }
}
