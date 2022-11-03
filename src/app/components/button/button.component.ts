import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNotEmpty } from 'src/common/utils/util';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class.ui-button]': 'true'
  },
})
export class ButtonComponent implements OnInit {

  @Input() size: string = 'md';
  @Input() type: string = 'primary';
  @Input('class') cssClass: string = '';
  @Input() rounded: boolean = false;
  @Input() disabled: boolean = false;
  @Output() onclick: EventEmitter<Event> = new EventEmitter<Event>();

  btnSize = '';
  btnType = '';
  btnRounded = '';
  btnShadow = '';
  btnBorder = '';
  fontColor = '';
  fontSize = '';
  fontShadow = '';
  fontStyle = '';

  constructor() { }

  ngOnInit(): void {
    if (isNotEmpty(this.size)) {
      this.btnSize = 'btn-' + this.size.toLocaleLowerCase();
    }
  }
  onClick($event : any) {
    this.onclick.emit($event);
  }
}
