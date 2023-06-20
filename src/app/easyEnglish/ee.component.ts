import { Component, OnInit,Pipe } from '@angular/core';
import * as data from '../../assets/api/tips/tips.json';

@Component({
  selector: 'ee',
  templateUrl: './ee.component.html',
  styleUrls: ['./ee.component.less']
})
export class EeComponent implements OnInit {
    selected: any
    constructor() { }

    ngOnInit() {
      this.random()
    }
    public random(){
        this.selected = undefined
        setTimeout(() => {
            this.selected = data['default'][Math.floor(Math.random() * data['default'].length)]
        }, 0);
        
    }
}