import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'eeHome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class EeHomeComponent implements OnInit {
  options = [
    { name: 'Tips phrases', route: 'tips' },
    { name: 'Verbal Tenses', route: 'verbalTenses' },
    { name: 'Conditional sentences', route: 'conditionalSentences' },
    { name: 'Phrasal verbs', route: 'phrasalVerbs' },
    { name: 'Idioms', route: 'tips' },
    { name: 'Collocations', route: 'tips' }
  ];
  constructor() {}

  ngOnInit() {

  }
 
}
