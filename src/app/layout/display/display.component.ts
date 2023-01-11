import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
  styleTxt : string ='';

  @ViewChild('test') ef: ElementRef | undefined

  constructor(
    private buttonService: ButtonService,
    private el: ElementRef
    ) { }

  ngOnInit(): void {
    this.buttonService.changeTypeEvent.subscribe((color: string) => {
      console.log('re : ', color)
      this.btnType = color;
    })
  }
  onClickGetCode(){
    this.btnType
    getComputedStyle(document.documentElement).getPropertyValue('color');
    const btn = document.getElementById('styleBtn');
    const a = document.querySelector('.btn-blue');
    if(a != null) {
      console.log(a);
    }
    // { color: 값, font-size: 값 }
    let result = '';
    if(btn) {
      result += 'color: ' + getComputedStyle(btn).getPropertyValue("color") + '\n';
      result += 'font-size: ' + getComputedStyle(btn).getPropertyValue("font-size") + '\n';
      result += 'border: ' + getComputedStyle(btn).getPropertyValue("border") + '\n';
      result += 'background: ' + getComputedStyle(btn).getPropertyValue("background") + '\n';
      result += 'text-shadow: ' + getComputedStyle(btn).getPropertyValue("text-shadow") + '\n';
    }
    console.log(result);
  }

  getCssText(element: any){
    let teksStyle = "";
    let compStyle = element;
    console.log('2222222222')
    teksStyle = compStyle?.nativeElement; 
    for(let a = 0; a < compStyle.length; a++){
        teksStyle += compStyle[a] + " : " + compStyle.getPropertyValue(compStyle[a]) + ";\n";
    }
    return teksStyle;
  }
  handleColorChange(color : any) {
    (this.el.nativeElement as HTMLElement).style.setProperty('--main-color', color);
  }
}
