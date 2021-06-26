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
      this.experienceDto.isOpenAni = false;
      setTimeout(()=>{this.experienceDto.isOpen = false;},1000)
    }
    else {
      this.experienceDto.isOpen = true;
      this.experienceDto.isOpenAni = true;
    }

  }
}
