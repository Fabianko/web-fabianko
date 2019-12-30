import { Component, OnInit, Input } from '@angular/core';
import { StudyDto } from '../dtos/StudyDto';

@Component({
  selector: 'studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.less']
})
export class StudiesComponent implements OnInit {
  @Input() public studiesList: StudyDto[];
  constructor() { }


  ngOnInit() {
  }



}
