import { Component, OnInit } from '@angular/core';
import { StudyDto } from '../dtos/StudyDto';

@Component({
  selector: 'studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.less']
})
export class StudiesComponent implements OnInit {
  public studiesList: StudyDto[] = [
    {
      date:"2015 - 2016",
      title:"Magíster en ingeniería informática",
      origin: "Universidad de Santiago de Chile",
      description:"Tesis: Método de modelamiento dinámico de tópicos para la red social Twitter Fue centrada en el pre-procesamiento de los Tweets generados en la red social Twitter, donde se busca la generación detópicos de forma dinámica en el tiempo, permitiendo un análisis predictivo y global respecto a diversos indicadores calculables utilizando procesamiento de lenguaje natural. Profesor Guía: Dra. Carolina Bonacic.",
      isOpen: false
    },
    {
      date:"2009 - 2016",
      title:"Ingeniería civil informática",
      origin: "Universidad de Santiago de Chile",
      description:"",
      isOpen: false
    },
    {
      date:"2009 - 2014",
      title:"Licenciado en Ciencias de la Ingeniería",
      origin: "Universidad de Santiago de Chile",
      description:"",
      isOpen: false
    }
  ];
  constructor() { }


  ngOnInit() {
  }



}
