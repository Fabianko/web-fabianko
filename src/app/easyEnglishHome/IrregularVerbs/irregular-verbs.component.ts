import { Component, OnInit, Pipe } from '@angular/core';
import * as tech from '../../../assets/api/tips/irregular-verbs-software.json';
import * as meet from '../../../assets/api/tips/irregular-verbs-meetings.json';
@Component({
  selector: 'eeIrregularVerbs',
  templateUrl: './irregular-verbs.component.html',
  styleUrls: ['./irregular-verbs.component.less'],
})
export class irregularVerbsComponent implements OnInit {
  learned = []
  verbs:VerbDTO[]  = [ ]
  index = 0
  optionSelected = 'tech'
  
  constructor() {}

  ngOnInit() {
    
    this.select('tech')
    this.learned = localStorage.getItem('verbsLearned') ? JSON.parse(localStorage.getItem('verbsLearned')) : [];
    this.randomIndex()
  }
  addLearned() {
    this.learned.push(this.verbs[this.index])
    localStorage.setItem('verbsLearned', JSON.stringify(this.learned))
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
    for (let i = 0; i < this.learned.length; i++) {
      for (let j = 0; j < this.verbs.length; j++) {
        if (this.learned[i].infinitive == this.verbs[j].infinitive) {
          this.verbs.splice(j, 1)
        }
      }
    }
    
    this.randomIndex()
      
  }
  randomIndex() {
    this.index = Math.floor(Math.random() * this.verbs.length)
    if (this.learned.includes(this.verbs[this.index])) {
      this.randomIndex()
    }
  }
 
}
export class VerbDTO {
  infinitive: string
  participle: string
  pastSimple: string
  translation: string
}