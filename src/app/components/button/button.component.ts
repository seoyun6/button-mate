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

  @Input() size: string = '';
  @Input() type: string = '';
  @Input() color: string = '';
  @Input('class') cssClass: string = '';
  @Input() rounded: boolean = false;
  @Input() disabled: boolean = false;
  @Output() onclick: EventEmitter<Event> = new EventEmitter<Event>();

  //버튼 옵션
  btnSize = '';
  btnType = '';
  btnColor = '';
  btnRounded = '';
  btnShadow = '';
  btnBorder = '';

  //버튼 텍스트 옵션
  fontColor = '';
  fontSize = '';
  fontShadow = '';
  fontStyle = '';

  constructor() { }

  ngOnInit(): void {
    if(isNotEmpty(this.size)) {
      this.btnSize = 'btn-' + this.size.toLocaleLowerCase();
      console.log('=====')
      console.log(this.size)
    }
    if(isNotEmpty(this.type)) {
      this.btnType = 'btn-' + this.type.toLocaleLowerCase();
      console.log('=============')
      console.log(this.type)
      console.log(this.btnType)
    }
    if(this.rounded) {
      this.btnRounded = 'rounded-pill'
    }
  }
  onClick($event : any) {
    this.onclick.emit($event);
  }
  onChangeType($event: string) {
    this.btnType = $event;
  }
}
