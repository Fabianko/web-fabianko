import { SelectClassificatorComponent } from '../select-classificator/select-classificator.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  public variableType: string = 'NEWS';
  @ViewChild('selectClassificator') public selectClassificator: SelectClassificatorComponent;


  ngOnInit() {

  }

  public selectOption(option: string) {
    this.variableType = undefined;
    setTimeout(() => {
      this.variableType = option;
      // this.selectClassificator.ngOnInit();
    }, 0);

  }





}
