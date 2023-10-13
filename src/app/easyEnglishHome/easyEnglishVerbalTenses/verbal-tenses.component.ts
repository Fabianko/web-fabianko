import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'eeVerbalTenses',
  templateUrl: './verbal-tenses.component.html',
  styleUrls: ['./verbal-tenses.component.less'],
})
export class VerbalTensesComponent implements OnInit {
  indice = 0;
  examples = [
    {
      "present-simple-es": "Yo estudio inglés.",
      "present-simple-en": "I study English.",
      "present-continuous-es": "Yo estoy estudiando inglés.",
      "present-continuous-en": "I <span class='span'>am</span> study<span class='span'>ing</span> English.",
      "past-simple-es": "Yo estudié inglés.",
      "past-simple-en": "I studi<span class='span'>ed</span> English.",
      "past-continuous-es": "Yo estaba estudiando inglés.",
      "past-continuous-en": "I <span class='span'>was</span> study<span class='span'>ing</span> English.",
      "future-simple-es": "Yo estudiaré inglés.",
      "future-simple-en": "I <span class='span'>will</span> study English.",
      "future-continuous-es": "Yo estaré estudiando inglés.",
      "future-continuous-en": "I <span class='span'>will be</span> study<span class='span'>ing</span> English.",
      "present-perfect-simple-es": "Yo he estudiado inglés.",
      "present-perfect-simple-en": "I <span class='span'>have</span> studi<span class='span'>ed</span> English.",
      "present-perfect-continuous-es": "Yo he estado estudiando inglés.",
      "present-perfect-continuous-en": "I <span class='span'>have been</span> study<span class='span'>ing</span> English.",
      "past-perfect-simple-es": "Yo había estudiado inglés.",
      "past-perfect-simple-en": "I <span class='span'>had</span> studi<span class='span'>ed</span> English.",
      "past-perfect-continuous-es": "Yo había estado estudiando inglés.",
      "past-perfect-continuous-en": "I <span class='span'>had been</span> study<span class='span'>ing</span> English.",
      "future-perfect-simple-es": "Yo habré estudiado inglés.",
      "future-perfect-simple-en": "I <span class='span'>will have</span> studi<span class='span'>ed</span> English.",
      "future-perfect-continuous-es": "Yo habré estado estudiando inglés.",
      "future-perfect-continuous-en": "I <span class='span'>will have been</span> study<span class='span'>ing</span> English."
    },
    {
      "present-simple-es": "Yo tomo esa tarea.",
      "present-simple-en": "I <span class='span-inf'>take</span> that task.",
      "present-continuous-es": "Yo estoy tomando esa tarea.",
      "present-continuous-en": "I <span class='span'>am</span> <span class='span-ing'>deploying</span> that task.",
    
      "past-simple-es": "Yo tomé esa tarea.",
      "past-simple-en": "I <span class='span-past'>took</span> that task.",
      "past-continuous-es": "Yo estaba tomando esa tarea.",
      "past-continuous-en": "I <span class='span'>was</span> <span class='span-ing'>deploying</span> that task.",
    
      "future-simple-es": "Yo tomaré esa tarea.",
      "future-simple-en": "I <span class='span'>will</span> <span class='span-inf'>take</span> that task.",
      "future-continuous-es": "Yo estaré tomando esa tarea.",
      "future-continuous-en": "I <span class='span'>will be</span> <span class='span-ing'>deploying</span> that task.",
    
      "present-perfect-simple-es": "Yo he tomado esa tarea.",
      "present-perfect-simple-en": "I <span class='span'>have</span> <span class='span-part'>taken</span> that task.",
      "present-perfect-continuous-es": "Yo he estado tomando esa tarea.",
      "present-perfect-continuous-en": "I <span class='span'>have been</span> <span class='span-ing'>deploying</span> that task.",
    
      "past-perfect-simple-es": "Yo había tomado esa tarea.",
      "past-perfect-simple-en": "I <span class='span'>had</span> <span class='span-part'>taken</span> that task.",
      "past-perfect-continuous-es": "Yo había estado tomando esa tarea.",
      "past-perfect-continuous-en": "I <span class='span'>had been</span> <span class='span-ing'>deploying</span> that task.",
    
      "future-perfect-simple-es": "Yo habré tomado esa tarea.",
      "future-perfect-simple-en": "I <span class='span'>will have</span> <span class='span-part'>taken</span> that task.",
      "future-perfect-continuous-es": "Yo habré estado tomando esa tarea.",
      "future-perfect-continuous-en": "I <span class='span'>will have been</span> <span class='span-ing'>deploying</span> that task."
    },
    {
      "present-simple-es": "Yo paso a producción.",
      "present-simple-en": "I <span class='span-inf'>deploy</span> to production.",
      "present-continuous-es": "Yo estoy pasando a producción.",
      "present-continuous-en": "I <span class='span'>am </span> <span class='span-ing'>deploying</span> to production.",
    
      "past-simple-es": "Yo pasé a producción.",
      "past-simple-en": "I <span class='span-past'>deployed</span> to production.",
      "past-continuous-es": "Yo estaba pasando a producción.",
      "past-continuous-en": "I <span class='span'>was </span> <span class='span-ing'>deploying</span> to production.",
    
      "future-simple-es": "Yo pasaré a producción.",
      "future-simple-en": "I <span class='span'>will</span> <span class='span-inf'>deploy</span> to production.",
      "future-continuous-es": "Yo estaré pasando a producción.",
      "future-continuous-en": "I <span class='span'>will be </span> <span class='span-ing'>deploying</span> to production.",
    
      "present-perfect-simple-es": "Yo he pasado a producción.",
      "present-perfect-simple-en": "I <span class='span'>have</span> <span class='span-past'>deployed</span> to production.",
      "present-perfect-continuous-es": "Yo he estado pasando a producción.",
      "present-perfect-continuous-en": "I <span class='span'>have been </span> <span class='span-ing'>deploying</span> to production.",
    
      "past-perfect-simple-es": "Yo había pasado a producción.",
      "past-perfect-simple-en": "I <span class='span'>had</span> <span class='span-past'>deployed</span> to production.",
      "past-perfect-continuous-es": "Yo había estado pasando a producción.",
      "past-perfect-continuous-en": "I <span class='span'>had been </span> <span class='span-ing'>deploying</span> to production.",
    
      "future-perfect-simple-es": "Yo habré pasado a producción.",
      "future-perfect-simple-en": "I <span class='span'>will have </span><span class='span-past'>deployed</span> to production.",
      "future-perfect-continuous-es": "Yo habré estado pasando a producción.",
      "future-perfect-continuous-en": "I <span class='span'>will have been</span> <span class='span-ing'>deploying</span> to production."
    }
    
    
  ];
  constructor() {}

  ngOnInit() {
    
  }
 
}
