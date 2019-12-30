import { Component, OnInit, Input } from '@angular/core';
import { ProfessionalExperienceDto } from '../dtos/ProfessionalExperienceDto';


@Component({
  selector: 'professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.less']
})
export class ProfessionalExperienceComponent implements OnInit {
  @Input() public experiences: ProfessionalExperienceDto[];
  constructor() { }


  ngOnInit() {
  }

}
