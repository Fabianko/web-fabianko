import { Component, OnInit } from '@angular/core';
import { ProfessionalExperienceDto } from '../dtos/ProfessionalExperienceDto';

@Component({
  selector: 'professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.less']
})
export class ProfessionalExperienceComponent implements OnInit {
  public experiences: ProfessionalExperienceDto[] = [
    {
      business: "AVLA SEGUROS DE CRÉDITO Y GARANTÍA FINANCIERAS S.A.",
      position: "Jefe de proyectos y desarrollo de software",
      date: "Abril 2017 - a la fecha",
      description: "Encargado del desarrollo de software en la unificación de sistemas para la expansión de la empresa, mejorando y optimizando el proceso productivo general de la empresa, como en la creación de garantías financieras, seguros de garantía y crédito, mutuos de crédito e hipotecarios para empresas a nivel latino americano, tecnologías utilizadas: angular2, spring de java y base de datos oracle en AWS",
      tags: [
        {
          name:"ANGULAR 4+",
          link:"https://angular.io"
        },
        {
          name:"AWS",
          link:"https://aws.amazon.com/es/"
        },
        {
          name:"AVLA",
          link:"https://www.avla.com/cl/"
        },
      ],
      isOpen:false
    },
    {
      business: "Orand S.A.",
      position: "Ingeniero de desarrollo e investigación",
      date: "Agosto 2016 - Abril 2017",
      description: "Encargado del desarrollo, gestión, implementación y puesta en producción de módulos para la visualización de búsquedas en Impresee js, python y java, generación de reportes automáticos para clientes empresas, creación de clasificadores de correos electrónicos utilizando diferentes características con diferentes técnicas de procesamiento de texto, desarrollo base en Java, python y ruby.",
      tags: [],
      isOpen:false
    },
    {
      business: "Imbalabs",
      position: "Investigación y desarrollo",
      date: "Septiembre 2015 - Noviembre 2016",
      description: "Encargado de procesamiento de texto, modelamiento de tópicos, procesos de clasificación de texto y análisis del comportamiento de los mensajes en Twitter, especialidad en pre-procesamiento de los mensajes para obtener la mayor información posible en el idioma español, desarrollo con herramientas en python y java",
      tags: [],
      isOpen:false
    },
    {
      business: "Etech Communities, proyecto copagamer y gamerapp",
      position: "Ingeniero de desarrollo",
      date: "Marzo 2015 - Noviembre 2016",
      description: "Encargado del desarrollo, gestión, implementación y puesta en producción de sistema GCIFS que soluciona el problema de generación de contenido (noticias) bajo demanda de usuarios por medio de escucha continua en redes sociales y portales de noticias de videojuegos. Sistema desarrollado en Ruby on Rails 4 en arquitectura AWS y base de datos postgresql",
      tags: [],
      isOpen:false
    },
    {
      business: "Universidad de Santiago de Chile, facultad de ingeniería",
      position: "Profesor por horas",
      date: "Agosto 2014 - a la fecha",
      description: "Varios cursos de laboratorio de Fundamentos de computación y programación, asignatura impartida para todos los estudiantes de ingeniería plan común, Ingeniería de sistemas para el departamento de ingeniería informática e ingeniería ambiental y la asignatura de Lógica y teoría de la computación para alumnos de 4to año de carrera en ingeniería civil informática, Base de datos para alumnos de ingeniería civil informática vespertino, Profesor corrector de tesis de pregrado.",
      tags: [],
      isOpen:false
    },
    {
      business: "Universidad de Santiago de Chile, Centro de innovación en aplicaciones sociales",
      position: "Ayudante de investigación",
      date: "Agosto 2014 - Enero 2016",
      description: "FONDEF (D09I1185) Proyecto: Observatorios Escalables de la Web en Tiempo Real, Aportando en herramientas para clasificación de documentos y modelos de tópicos en la red social Twitter.",
      tags: [],
      isOpen:false
    },{
      business: "Universidad de Central de Chile",
      position: "Profesor por horas",
      date: "Agosto 2014 - Enero 2015",
      description: "Laboratorio deSistemas de informaciónpara alumnos de 4to año de ingeniería civil industria con modelamientode procesos y negocios en Bizagi para mejorar o solucionar procesos con sistemas de información.",
      tags: [],
      isOpen:false
    },
    {
      business: "Universidad de Santiago de Chile",
      position: "Ayudante en cátedra y laboratorio",
      date: "Marzo 2011 - Agosto 2015",
      description: "Para las asignaturas deFundamentos de la programación(2/2011),Estructuras discretas(1/2012 al 2/2013),Lógicay teoría de la computación(2/2012),Fundamentos de la computación y la programación(2/2013),Fundamentosde base de datos(2/2013 al 1/2015), Electivo profesionalTaller de emprendimiento(1/2014).",
      tags: [],
      isOpen:false
    }

  ];
  constructor() { }


  ngOnInit() {
  }

}
