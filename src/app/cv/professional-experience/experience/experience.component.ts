import { Component, OnInit, Input } from '@angular/core';
import { ProfessionalExperienceDto } from '../../dtos/ProfessionalExperienceDto';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  @Input() experienceDto: ProfessionalExperienceDto;

  ngOnInit() {
  }
  public openExp() {
    if (this.experienceDto.isOpen ) {
      this.experienceDto.isOpen = false;
    }
    else {
      this.experienceDto.isOpen = true;
    }

  }
}
