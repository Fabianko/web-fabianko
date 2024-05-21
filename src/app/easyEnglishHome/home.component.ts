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
      route: './tips',
      faicon: 'fa fa-lightbulb-o',
      bgcolor: '#7209b7',
      txtcolor: '#ffffff',
    },
    {
      name: 'Verbal Tenses',
      route: './verbalTenses',
      faicon: 'fa fa-clock-o',
      bgcolor: '#560bad',
      txtcolor: '#ffffff',
    },
    {
      name: 'Conditional sentences',
      route: './conditionalSentences',
      faicon: 'fa fa-question-circle',
      bgcolor: '#480ca8',
      txtcolor: '#ffffff',
    },
    {
      name: 'Phrasal verbs',
      route: './phrasalVerbs',
      faicon: 'fa fa-sort-alpha-asc',
      bgcolor: '#3a0ca3',
      txtcolor: '#ffffff',
    },
    {
      name: 'Read news',
      route: './readNews',
      faicon: 'fa fa-newspaper-o',
      bgcolor: '#3f37c9',
      txtcolor: '#ffffff',
    },
    {
      name: 'Irregular verbs',
      route: './irregularVerbs',
      faicon: 'fa fa-sort-alpha-asc',
      bgcolor: '#4361ee',
      txtcolor: '#ffffff',
    },
    {
      name: 'Antonyms',
      route: './antonyms',
      faicon: 'fa fa-sort-alpha-asc',
      bgcolor: '#4895ef',
      txtcolor: '#ffffff',
    }
  ];
  constructor() {}

  ngOnInit() {}
}
