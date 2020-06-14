import { Component, OnInit, Input } from '@angular/core';
import { StudyDto } from '../../dtos/StudyDto';

@Component({
  selector: 'study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.less']
})
export class StudyComponent implements OnInit {

  constructor() { }

  @Input() studyDto: StudyDto;
  ngOnInit() {
  }
  public openStudy() {
    if (this.studyDto.isOpen ) {
      this.studyDto.isOpenAni = false;
      setTimeout(()=>{this.studyDto.isOpen = false;},500)
    }
    else {
      this.studyDto.isOpen = true;
      this.studyDto.isOpenAni = true;
      
    }
  }
}
