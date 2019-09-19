import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-classificator',
  templateUrl: './select-classificator.component.html',
  styleUrls: ['./select-classificator.component.less']
})
export class SelectClassificatorComponent implements OnInit {

  @Input() type;
  constructor() { }

  ngOnInit() {
  }

  public onClick(e) {
    console.log(e);
  }

}
