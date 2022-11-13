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

  constructor(private buttonService: ButtonService) { }

  ngOnInit(): void {
    this.buttonService.changeTypeEvent.subscribe((color: string) => {
      console.log('re : ', color)
      this.btnType = color;
    })
  }
  onClickGetCode(){
    if(this.btnType === 'green') {
     let css = "" 
    }
    console.log('===================================')
    console.log(this.btnType)
    this.btnType
    getComputedStyle(document.documentElement).getPropertyValue('color')
    // const element = document.getElementById('test');
    console.log('===================')
    console.log('44444444', this.ef)
    // console.log(getComputedStyle(element).getPropertyValue("color"))
    
    
    // const btnStyle = getComputedStyle(element);
    // const result = this.getCssText(element);
    // console.log(result);
    // this.styleTxt = result;
  }

  getCssText(elemen: any){
    let teksStyle = "";
    let compStyle = this.ef;
    console.log('2222222222')
    teksStyle = compStyle?.nativeElement; 
    // for(let a = 0; a < compStyle.length; a++){
    //     teksStyle += compStyle[a] + " : " + compStyle.getPropertyValue(compStyle[a]) + ";\n";
    // }
    // return teksStyle;
  }
}
