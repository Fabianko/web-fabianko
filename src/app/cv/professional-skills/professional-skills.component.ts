import { Component, OnInit, Input } from '@angular/core';
import { skillDto} from '../dtos/skillDto'

@Component({
  selector: 'professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.less']
})
export class ProfessionalSkillsComponent implements OnInit {
  @Input() skills:skillDto[];
  constructor() { }


  ngOnInit() {
    if (this.skills) {
      this.skills.sort((a,b) => {return b.value - a.value});
    }
  }

}
