import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'eeHome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class EeHomeComponent implements OnInit {
  options = [
    {
      name: 'Tips phrases',
      route: 'tips',
      faicon: 'fa fa-lightbulb-o',
      bgcolor: '#7209b7',
      txtcolor: '#ffffff',
    },
    {
      name: 'Verbal Tenses',
      route: 'verbalTenses',
      faicon: 'fa fa-clock-o',
      bgcolor: '#560bad',
      txtcolor: '#ffffff',
    },
    {
      name: 'Conditional sentences',
      route: 'conditionalSentences',
      faicon: 'fa fa-question-circle',
      bgcolor: '#480ca8',
      txtcolor: '#ffffff',
    },
    {
      name: 'Phrasal verbs',
      route: 'phrasalVerbs',
      faicon: 'fa fa-sort-alpha-asc',
      bgcolor: '#3a0ca3',
      txtcolor: '#ffffff',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
