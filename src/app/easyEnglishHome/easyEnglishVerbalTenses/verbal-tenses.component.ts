import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'eeVerbalTenses',
  templateUrl: './verbal-tenses.component.html',
  styleUrls: ['./verbal-tenses.component.less'],
})
export class VerbalTensesComponent implements OnInit {
  indice = 0;
  list_examples = ['study', 'take', 'deploy', 'do', 'go', 'be', 'say'];
  examples = [
    {
      "present-simple-es": "Yo estudio inglés.",
      "present-simple-en": "I study English.",
      "present-continuous-es": "Yo estoy estudiando inglés.",
      "present-continuous-en": "I <span class='span-normal'>am</span> study<span class='span-normal'>ing</span> English.",
      "past-simple-es": "Yo estudié inglés.",
      "past-simple-en": "I studi<span class='span-normal'>ed</span> English.",
      "past-continuous-es": "Yo estaba estudiando inglés.",
      "past-continuous-en": "I <span class='span-normal'>was</span> study<span class='span-normal'>ing</span> English.",
      "future-simple-es": "Yo estudiaré inglés.",
      "future-simple-en": "I <span class='span-normal'>will</span> study English.",
      "future-continuous-es": "Yo estaré estudiando inglés.",
      "future-continuous-en": "I <span class='span-normal'>will be</span> study<span class='span-normal'>ing</span> English.",
      "present-perfect-simple-es": "Yo he estudiado inglés.",
      "present-perfect-simple-en": "I <span class='span-normal'>have</span> studi<span class='span-normal'>ed</span> English.",
      "present-perfect-continuous-es": "Yo he estado estudiando inglés.",
      "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> study<span class='span-normal'>ing</span> English.",
      "past-perfect-simple-es": "Yo había estudiado inglés.",
      "past-perfect-simple-en": "I <span class='span-normal'>had</span> studi<span class='span-normal'>ed</span> English.",
      "past-perfect-continuous-es": "Yo había estado estudiando inglés.",
      "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> study<span class='span-normal'>ing</span> English.",
      "future-perfect-simple-es": "Yo habré estudiado inglés.",
      "future-perfect-simple-en": "I <span class='span-normal'>will have</span> studi<span class='span-normal'>ed</span> English.",
      "future-perfect-continuous-es": "Yo habré estado estudiando inglés.",
      "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> study<span class='span-normal'>ing</span> English."
    },
    {
      "present-simple-es": "Yo tomo esa tarea.",
      "present-simple-en": "I <span class='span-inf'>take</span> that task.",
      "present-continuous-es": "Yo estoy tomando esa tarea.",
      "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>deploying</span> that task.",
    
      "past-simple-es": "Yo tomé esa tarea.",
      "past-simple-en": "I <span class='span-past'>took</span> that task.",
      "past-continuous-es": "Yo estaba tomando esa tarea.",
      "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>deploying</span> that task.",
    
      "future-simple-es": "Yo tomaré esa tarea.",
      "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>take</span> that task.",
      "future-continuous-es": "Yo estaré tomando esa tarea.",
      "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>deploying</span> that task.",
    
      "present-perfect-simple-es": "Yo he tomado esa tarea.",
      "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-part'>taken</span> that task.",
      "present-perfect-continuous-es": "Yo he estado tomando esa tarea.",
      "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>deploying</span> that task.",
    
      "past-perfect-simple-es": "Yo había tomado esa tarea.",
      "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-part'>taken</span> that task.",
      "past-perfect-continuous-es": "Yo había estado tomando esa tarea.",
      "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>deploying</span> that task.",
    
      "future-perfect-simple-es": "Yo habré tomado esa tarea.",
      "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-part'>taken</span> that task.",
      "future-perfect-continuous-es": "Yo habré estado tomando esa tarea.",
      "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>deploying</span> that task."
    },
    {
      "present-simple-es": "Yo paso a producción.",
      "present-simple-en": "I <span class='span-inf'>deploy</span> to production.",
      "present-continuous-es": "Yo estoy pasando a producción.",
      "present-continuous-en": "I <span class='span-normal'>am </span> <span class='span-ing'>deploying</span> to production.",
    
      "past-simple-es": "Yo pasé a producción.",
      "past-simple-en": "I <span class='span-past'>deployed</span> to production.",
      "past-continuous-es": "Yo estaba pasando a producción.",
      "past-continuous-en": "I <span class='span-normal'>was </span> <span class='span-ing'>deploying</span> to production.",
    
      "future-simple-es": "Yo pasaré a producción.",
      "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>deploy</span> to production.",
      "future-continuous-es": "Yo estaré pasando a producción.",
      "future-continuous-en": "I <span class='span-normal'>will be </span> <span class='span-ing'>deploying</span> to production.",
    
      "present-perfect-simple-es": "Yo he pasado a producción.",
      "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-past'>deployed</span> to production.",
      "present-perfect-continuous-es": "Yo he estado pasando a producción.",
      "present-perfect-continuous-en": "I <span class='span-normal'>have been </span> <span class='span-ing'>deploying</span> to production.",
    
      "past-perfect-simple-es": "Yo había pasado a producción.",
      "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-past'>deployed</span> to production.",
      "past-perfect-continuous-es": "Yo había estado pasando a producción.",
      "past-perfect-continuous-en": "I <span class='span-normal'>had been </span> <span class='span-ing'>deploying</span> to production.",
    
      "future-perfect-simple-es": "Yo habré pasado a producción.",
      "future-perfect-simple-en": "I <span class='span-normal'>will have </span><span class='span-past'>deployed</span> to production.",
      "future-perfect-continuous-es": "Yo habré estado pasando a producción.",
      "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>deploying</span> to production."
    },
    {
      "present-simple-es": "Yo hago una tarea.",
      "present-simple-en": "I <span class='span-inf'>do</span> a task.",
      "present-continuous-es": "Yo estoy haciendo una tarea.",
      "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>doing</span> a task.",
    
      "past-simple-es": "Yo hice una tarea.",
      "past-simple-en": "I <span class='span-past'>did</span> a task.",
      "past-continuous-es": "Yo estaba haciendo una tarea.",
      "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>doing</span> a task.",
    
      "future-simple-es": "Yo haré una tarea.",
      "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>do</span> a task.",
      "future-continuous-es": "Yo estaré haciendo una tarea.",
      "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>doing</span> a task.",
    
      "present-perfect-simple-es": "Yo he hecho una tarea.",
      "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-past'>done</span> a task.",
      "present-perfect-continuous-es": "Yo he estado haciendo una tarea.",
      "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>doing</span> a task.",
    
      "past-perfect-simple-es": "Yo había hecho una tarea.",
      "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-past'>done</span> a task.",
      "past-perfect-continuous-es": "Yo había estado haciendo una tarea.",
      "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>doing</span> a task.",
    
      "future-perfect-simple-es": "Yo habré hecho una tarea.",
      "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-past'>done</span> a task.",
      "future-perfect-continuous-es": "Yo habré estado haciendo una tarea.",
      "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>doing</span> a task."
    },
    {
      "present-simple-es": "Yo voy a la oficina.",
      "present-simple-en": "I <span class='span-inf'>go</span> to the office.",
      "present-continuous-es": "Yo estoy yendo a la oficina.",
      "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>going</span> to the office.",

      "past-simple-es": "Yo fui a la oficina.",
      "past-simple-en": "I <span class='span-past'>went</span> to the office.",
      "past-continuous-es": "Yo estaba yendo a la oficina.",
      "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>going</span> to the office.",

      "future-simple-es": "Yo iré a la oficina.",
      "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>go</span> to the office.",
      "future-continuous-es": "Yo estaré yendo a la oficina.",
      "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>going</span> to the office.",
          
      "present-perfect-simple-es": "Yo he ido a la oficina.",
      "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-past'>gone</span> to the office.",
      "present-perfect-continuous-es": "Yo he estado yendo a la oficina.",
      "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>going</span> to the office.",
    
      "past-perfect-simple-es": "Yo había ido a la oficina.",
      "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-past'>gone</span> to the office.",
      "past-perfect-continuous-es": "Yo había estado yendo a la oficina.",
      "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>going</span> to the office.",
    
      "future-perfect-simple-es": "Yo habré ido a la oficina.",
      "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-past'>gone</span> to the office.",
      "future-perfect-continuous-es": "Yo habré estado yendo a la oficina.",
      "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>going</span> to the office."
    },
    {
      "present-simple-es": "Yo soy un desarrollador.",
      "present-simple-en": "I <span class='span-inf'>am</span> a developer.",
      "present-continuous-es": "Yo estoy siendo un desarrollador.",
      "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>being</span> a developer.",

      "past-simple-es": "Yo fui un desarrollador.",
      "past-simple-en": "I <span class='span-past'>was</span> a developer.",
      "past-continuous-es": "Yo estaba siendo un desarrollador.",
      "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>being</span> a developer.",

      "future-simple-es": "Yo seré un desarrollador.",
      "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>be</span> a developer.",
      "future-continuous-es": "Yo estaré siendo un desarrollador.",
      "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>being</span> a developer.",
          
      "present-perfect-simple-es": "Yo he sido un desarrollador.",
      "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-past'>been</span> a developer.",
      "present-perfect-continuous-es": "Yo he estado siendo un desarrollador.",
      "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>being</span> a developer.",
    
      "past-perfect-simple-es": "Yo había sido un desarrollador.",
      "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-past'>been</span> a developer.",
      "past-perfect-continuous-es": "Yo había estado siendo un desarrollador.",
      "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>being</span> a developer.",
    
      "future-perfect-simple-es": "Yo habré sido un desarrollador.",
      "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-past'>been</span> a developer.",
      "future-perfect-continuous-es": "Yo habré estado siendo un desarrollador.",
      "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>being</span> a developer."
    },
    {
      "present-simple-es": "Yo digo la verdad.",
      "present-simple-en": "I <span class='span-inf'>say</span> the truth.",
      "present-continuous-es": "Yo estoy diciendo la verdad.",
      "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>saying</span> the truth.",

      "past-simple-es": "Yo dije la verdad.",
      "past-simple-en": "I <span class='span-past'>said</span> the truth.",
      "past-continuous-es": "Yo estaba diciendo la verdad.",
      "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>saying</span> the truth.",

      "future-simple-es": "Yo diré la verdad.",
      "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>say</span> the truth.",
      "future-continuous-es": "Yo estaré diciendo la verdad.",
      "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>saying</span> the truth.",
          
      "present-perfect-simple-es": "Yo he dicho la verdad.",
      "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-past'>said</span> the truth.",
      "present-perfect-continuous-es": "Yo he estado diciendo la verdad.",
      "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>saying</span> the truth.",
    
      "past-perfect-simple-es": "Yo había dicho la verdad.",
      "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-past'>said</span> the truth.",
      "past-perfect-continuous-es": "Yo había estado diciendo la verdad.",
      "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>saying</span> the truth.",
    
      "future-perfect-simple-es": "Yo habré dicho la verdad.",
      "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-past'>said</span> the truth.",
      "future-perfect-continuous-es": "Yo habré estado diciendo la verdad.",
      "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>saying</span> the truth."
    },


      


    
    
  ];
  constructor() {}

  ngOnInit() {
    
  }
 
}
