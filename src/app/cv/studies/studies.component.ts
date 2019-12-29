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
      description:"Tesis: Método de modelamiento dinámico de tópicos para la red social Twitter Fue centrada en el pre-procesamiento de los Tweets generados en la red social Twitter, donde se busca la generación de tópicos de forma dinámica en el tiempo, permitiendo un análisis predictivo y global respecto a diversos indicadores calculables utilizando procesamiento de lenguaje natural. Profesor Guía: Dra. Carolina Bonacic. Diploma de excelencia academica por el rendimiento en el programa de magíster ",
      isOpen: false
    },
    {
      date:"2009 - 2016",
      title:"Ingeniería civil informática",
      origin: "Universidad de Santiago de Chile",
      description:"Memoria, se me permite presentar la tesis de magíster como memoria de ingeniería civil informática dado la complejidad del tema y la parte de programación necesaria para el preprocesamiento de texto. Diploma de titulación oportuna por terminar la carrera en los 6 años correspondientes",
      isOpen: false
    },
    {
      date:"2009 - 2014",
      title:"Licenciado en Ciencias de la Ingeniería",
      origin: "Universidad de Santiago de Chile",
      description:"Este titulo es entregado al 4 año cursado completo de la carrera que tiene un equivalente en conocimientos con cualquier licenciatura entregada por las universidades de Chile.",
      isOpen: false
    }
  ];
  constructor() { }


  ngOnInit() {
  }



}
