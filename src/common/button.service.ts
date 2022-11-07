import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  @Output() changeTypeEvent = new EventEmitter<string>();

  constructor(
  ) { }

  onChangeType(color : string) {
    console.log('output : ', color);
    this.changeTypeEvent.emit(color);
  }

}
