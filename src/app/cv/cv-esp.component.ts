import { Component, OnInit } from '@angular/core';
import {StudiesComponent} from './studies/studies.component';
@Component({
  selector: 'app-cv-esp',
  templateUrl: './cv-esp.component.html',
  styleUrls: ['./cv-esp.component.less']
})
export class CvEspComponent implements OnInit {

  constructor() { }
  public cv:cvClass;
  public cvEsp:cvClass = {
    lateral1:"SOBRE MI",
    lateral1Text:'Mi objetivo profesional es enfocarme en la gestión, investigación y desarrollo de proyectos en todos los tamaños, logrando a través de la innovación y el trabajo de equipos cumplir con los objetivos, la calidad y las expectativas esperadas por las personas, para esto no me impongo limitaciones respecto a las actividades a desarrollar en el ámbito profesional y el trabajo en equipo.',

  }

  ngOnInit() {
    this.cv = this.cvEsp;
  }

}
export class cvClass{
  lateral1: string;
  lateral1Text: string;
}
