import { Component, OnInit } from '@angular/core';
import dataEsp from './cv-esp.json';
import dataEng from './cv-eng.json';


import { cvClassDto } from './dtos/cvClassDto.js';
@Component({
  selector: 'app-cv-esp',
  templateUrl: './cv-esp.component.html',
  styleUrls: ['./cv-esp.component.less']
})
export class CvEspComponent implements OnInit {

  constructor() { }
  public country: string = "ES";
  public cv:cvClassDto;


  ngOnInit() {
    this.setCVCountry();
  }

  public setCVCountry() {
    if (this.country == "ES") {
      console.log("data",dataEsp.default);
      this.cv = dataEsp.default;
    }
    else {
      this.cv = dataEng.default;
    }
  }
  public changeLenguage() {
    if (this.country == "ES") {
      this.country = "EN";
    }
    else {
      this.country = "ES";
    }
    this.setCVCountry();
  }


}

