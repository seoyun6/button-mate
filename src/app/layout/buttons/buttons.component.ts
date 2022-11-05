import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { ButtonService } from 'src/common/button.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  host: {
    '[class.buttons]': 'true'
  },
})
export class ButtonsComponent implements OnInit {

  constructor(private buttonService: ButtonService) { }

  ngOnInit(): void {
  }
  onClick(color: string) {
  console.log('leftBtn', color);
   this.buttonService.onChangeType(color);
  }
}
