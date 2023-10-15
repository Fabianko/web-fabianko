import { Component, OnInit, Pipe } from '@angular/core';
import * as tech from '../../../assets/api/tips/irregular-verbs-software.json';
import * as meet from '../../../assets/api/tips/irregular-verbs-meetings.json';
@Component({
  selector: 'eeIrregularVerbs',
  templateUrl: './irregular-verbs.component.html',
  styleUrls: ['./irregular-verbs.component.less'],
})
export class irregularVerbsComponent implements OnInit {
  verbs = [ ]
  index = 0
  optionSelected = 'tech'
  
  constructor() {}

  ngOnInit() {
    this.select('tech')
  }
  select(option: string) {
    this.verbs = []
    if (option == 'tech') {
      this.verbs = tech
      this.optionSelected = 'tech'
    } else if (option == 'meet') {
      this.verbs = meet
      this.optionSelected = 'meet'
    }
  }
  randomIndex() {
    this.index = Math.floor(Math.random() * this.verbs.length)
  }
 
}
