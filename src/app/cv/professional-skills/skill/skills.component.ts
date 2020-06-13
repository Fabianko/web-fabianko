import { Component, OnInit, Input } from '@angular/core';
import { skillDto } from '../../dtos/skillDto';

@Component({
  selector: 'skill',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {
  @Input() skill: skillDto;
  constructor() { }


  ngOnInit() {
  }

}
