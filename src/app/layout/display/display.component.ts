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
  styleTxt : string ='';

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
    const element = document.getElementById('test');
    console.log('===================')
    // console.log(getComputedStyle(element).getPropertyValue("color"))
    
    
    // const btnStyle = getComputedStyle(element);
    const result = this.getCssText(element);
    console.log(result);
    // this.styleTxt = btnStyle;
  }

  getCssText(elemen: any){
    let teksStyle = "";
    let compStyle = getComputedStyle(elemen);
    for(let a = 0; a < compStyle.length; a++){
        teksStyle += compStyle[a] + " : " + compStyle.getPropertyValue(compStyle[a]) + ";\n";
    }
    return teksStyle;
}
}
