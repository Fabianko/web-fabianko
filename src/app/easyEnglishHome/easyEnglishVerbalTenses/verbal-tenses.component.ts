import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'eeVerbalTenses',
  templateUrl: './verbal-tenses.component.html',
  styleUrls: ['./verbal-tenses.component.less'],
})
export class VerbalTensesComponent implements OnInit {
  indice = 0;
  indice_s = "I"
  list_examples = ['study', 'take', 'deploy', 'do', 'go', 'be', 'say', 'get', 'have', 'write', 'know', 'take'];
  list_subjects = ['I', 'You', 'He/She/It', 'We/They'];
  changeExample(subject: string) {
    this.examples = this.options[subject];
    this.indice_s = subject;
  }
  options= {
    "I" : [
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
      {
        "present-simple-es": "Yo obtengo un trabajo en usa",
        "present-simple-en": "I <span class='span-inf'>get</span> a job in usa",
        "present-continuous-es": "Yo estoy obteniendo un trabajo en usa",
        "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>getting</span> a job in usa",
            
        "past-simple-es": "Yo obtuve un trabajo en usa",
        "past-simple-en": "I <span class='span-past'>got</span> a job in usa",
        "past-continuous-es": "Yo estaba obteniendo un trabajo en usa",
        "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>getting</span> a job in usa",
      
        "future-simple-es": "Yo obtendré un trabajo en usa",
        "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>get</span> a job in usa",
        "future-continuous-es": "Yo estaré obteniendo un trabajo en usa",
        "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>getting</span> a job in usa",
      
        "present-perfect-simple-es": "Yo he obtenido un trabajo en usa",
        "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-part'>gotten</span> a job in usa",
        "present-perfect-continuous-es": "Yo he estado obteniendo un trabajo en usa",
        "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>getting</span> a job in usa",
      
        "past-perfect-simple-es": "Yo había obtenido un trabajo en usa",
        "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-part'>gotten</span> a job in usa",
        "past-perfect-continuous-es": "Yo había estado obteniendo un trabajo en usa",
        "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>getting</span> a job in usa",
      
        "future-perfect-simple-es": "Yo habré obtenido un trabajo en usa",
        "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-part'>gotten</span> a job in usa",
        "future-perfect-continuous-es": "Yo habré estado obteniendo un trabajo en usa",
        "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>getting</span> a job in usa"
      },
      {
        "present-simple-es": "yo tengo una reunión a las 10.",
        "present-simple-en": "I <span class='span-inf'>have</span> a meeting at 10.",
        "present-continuous-es": "Yo estoy teniendo una reunión a las 10.",
        "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>having</span> a meeting at 10.",
            
        "past-simple-es": "Yo tuve una reunión a las 10.",
        "past-simple-en": "I <span class='span-past'>had</span> a meeting at 10.",
        "past-continuous-es": "Yo estaba teniendo una reunión a las 10.",
        "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>having</span> a meeting at 10.",
      
        "future-simple-es": "Yo tendré una reunión a las 10.",
        "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>have</span> a meeting at 10.",
        "future-continuous-es": "Yo estaré teniendo una reunión a las 10.",
        "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>having</span> a meeting at 10.",
      
        "present-perfect-simple-es": "Yo he tenido una reunión a las 10.",
        "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-part'>had</span> a meeting at 10.",
        "present-perfect-continuous-es": "Yo he estado teniendo una reunión a las 10.",
        "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>having</span> a meeting at 10.",
      
        "past-perfect-simple-es": "Yo había tenido una reunión a las 10.",
        "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-part'>had</span> a meeting at 10.",
        "past-perfect-continuous-es": "Yo había estado teniendo una reunión a las 10.",
        "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>having</span> a meeting at 10.",
      
        "future-perfect-simple-es": "Yo habré tenido una reunión a las 10.",
        "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-part'>had</span> a meeting at 10.",
        "future-perfect-continuous-es": "Yo habré estado teniendo una reunión a las 10.",
        "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>having</span> a meeting at 10."
      },
      {
        "present-simple-es": "Yo escribo código de alta calidad",
        "present-simple-en": "I <span class='span-inf'>write</span> high quality code",
        "present-continuous-es": "Yo estoy escribiendo código de alta calidad",
        "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>writing</span> high quality code",
            
        "past-simple-es": "Yo escribí código de alta calidad",
        "past-simple-en": "I <span class='span-past'>wrote</span> high quality code",
        "past-continuous-es": "Yo estaba escribiendo código de alta calidad",
        "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>writing</span> high quality code",
      
        "future-simple-es": "Yo escribiré código de alta calidad",
        "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>write</span> high quality code",
        "future-continuous-es": "Yo estaré escribiendo código de alta calidad",
        "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>writing</span> high quality code",
      
        "present-perfect-simple-es": "Yo he escrito código de alta calidad",
        "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-part'>written</span> high quality code",
        "present-perfect-continuous-es": "Yo he estado escribiendo código de alta calidad",
        "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>writing</span> high quality code",
      
        "past-perfect-simple-es": "Yo había escrito código de alta calidad",
        "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-part'>written</span> high quality code",
        "past-perfect-continuous-es": "Yo había estado escribiendo código de alta calidad",
        "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>writing</span> high quality code",
      
        "future-perfect-simple-es": "Yo habré escrito código de alta calidad",
        "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-part'>written</span> high quality code",
        "future-perfect-continuous-es": "Yo habré estado escribiendo código de alta calidad",
        "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>writing</span> high quality code"
      },
      {
        "present-simple-es": "Yo se programar en JavaScript",
        "present-simple-en": "I <span class='span-inf'>know</span> how to program in JavaScript",
        "present-continuous-es": "Yo estoy aprendiendo a programar en JavaScript",
        "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>learning</span> how to program in JavaScript",
            
        "past-simple-es": "Yo aprendí a programar en JavaScript",
        "past-simple-en": "I <span class='span-past'>learned</span> how to program in JavaScript",
        "past-continuous-es": "Yo estaba aprendiendo a programar en JavaScript",
        "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>learning</span> how to program in JavaScript",
      
        "future-simple-es": "Yo aprenderé a programar en JavaScript",
        "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>learn</span> how to program in JavaScript",
        "future-continuous-es": "Yo estaré aprendiendo a programar en JavaScript",
        "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>learning</span> how to program in JavaScript",
      
        "present-perfect-simple-es": "Yo he aprendido a programar en JavaScript",
        "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "present-perfect-continuous-es": "Yo he estado aprendiendo a programar en JavaScript",
        "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>learning</span> how to program in JavaScript",
      
        "past-perfect-simple-es": "Yo había aprendido a programar en JavaScript",
        "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "past-perfect-continuous-es": "Yo había estado aprendiendo a programar en JavaScript",
        "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>learning</span> how to program in JavaScript",
      
        "future-perfect-simple-es": "Yo habré aprendido a programar en JavaScript",
        "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "future-perfect-continuous-es": "Yo habré estado aprendiendo a programar en JavaScript",
        "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>learning</span> how to program in JavaScript"
      },
      {
        "present-simple-es": "Yo tomo decisiones importantes",
        "present-simple-en": "I <span class='span-inf'>take</span> important decisions",
        "present-continuous-es": "Yo estoy tomando decisiones importantes",
        "present-continuous-en": "I <span class='span-normal'>am</span> <span class='span-ing'>taking</span> important decisions",
            
        "past-simple-es": "Yo tomé decisiones importantes",
        "past-simple-en": "I <span class='span-past'>took</span> important decisions",
        "past-continuous-es": "Yo estaba tomando decisiones importantes",
        "past-continuous-en": "I <span class='span-normal'>was</span> <span class='span-ing'>taking</span> important decisions",
      
        "future-simple-es": "Yo tomaré decisiones importantes",
        "future-simple-en": "I <span class='span-normal'>will</span> <span class='span-inf'>take</span> important decisions",
        "future-continuous-es": "Yo estaré tomando decisiones importantes",
        "future-continuous-en": "I <span class='span-normal'>will be</span> <span class='span-ing'>taking</span> important decisions",
      
        "present-perfect-simple-es": "Yo he tomado decisiones importantes",
        "present-perfect-simple-en": "I <span class='span-normal'>have</span> <span class='span-part'>taken</span> important decisions",
        "present-perfect-continuous-es": "Yo he estado tomando decisiones importantes",
        "present-perfect-continuous-en": "I <span class='span-normal'>have been</span> <span class='span-ing'>taking</span> important decisions",
      
        "past-perfect-simple-es": "Yo había tomado decisiones importantes",
        "past-perfect-simple-en": "I <span class='span-normal'>had</span> <span class='span-part'>taken</span> important decisions",
        "past-perfect-continuous-es": "Yo había estado tomando decisiones importantes",
        "past-perfect-continuous-en": "I <span class='span-normal'>had been</span> <span class='span-ing'>taking</span> important decisions",
      
        "future-perfect-simple-es": "Yo habré tomado decisiones importantes",
        "future-perfect-simple-en": "I <span class='span-normal'>will have</span> <span class='span-part'>taken</span> important decisions",
        "future-perfect-continuous-es": "Yo habré estado tomando decisiones importantes",
        "future-perfect-continuous-en": "I <span class='span-normal'>will have been</span> <span class='span-ing'>taking</span> important decisions"
      },
  
    ],
    "You" : [
      {
        "present-simple-es": "Tú estudias inglés.",
        "present-simple-en": "You study English.",
        "present-continuous-en": "You <span class='span-normal'>are</span> study<span class='span-normal'>ing</span> English.",
        "past-simple-en": "You studi<span class='span-normal'>ed</span> English.",
        "past-continuous-en": "You <span class='span-normal'>were</span> study<span class='span-normal'>ing</span> English.",
        "future-simple-en": "You <span class='span-normal'>will</span> study English.",
        "future-continuous-en": "You <span class='span-normal'>will be</span> study<span class='span-normal'>ing</span> English.",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> studi<span class='span-normal'>ed</span> English.",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> study<span class='span-normal'>ing</span> English.",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> studi<span class='span-normal'>ed</span> English.",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> study<span class='span-normal'>ing</span> English.",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> studi<span class='span-normal'>ed</span> English.",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> study<span class='span-normal'>ing</span> English."
      },
      {
        "present-simple-es": "Tú tomas esa tarea.",
        "present-simple-en": "You <span class='span-inf'>take</span> that task.",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>deploying</span> that task.",
        "past-simple-en": "You <span class='span-past'>took</span> that task.",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>deploying</span> that task.",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>take</span> that task.",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>deploying</span> that task.",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-part'>taken</span> that task.",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>deploying</span> that task.",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-part'>taken</span> that task.",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>deploying</span> that task.",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-part'>taken</span> that task.",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>deploying</span> that task."
      },
      {
        "present-simple-es": "Tú pasas a producción.",
        "present-simple-en": "You <span class='span-inf'>deploy</span> to production.",
        "present-continuous-en": "You <span class='span-normal'>are </span> <span class='span-ing'>deploying</span> to production.",
        "past-simple-en": "You <span class='span-past'>deployed</span> to production.",
        "past-continuous-en": "You <span class='span-normal'>were </span> <span class='span-ing'>deploying</span> to production.",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>deploy</span> to production.",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>deploying</span> to production.",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-past'>deployed</span> to production.",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been </span> <span class='span-ing'>deploying</span> to production.",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-past'>deployed</span> to production.",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been </span> <span class='span-ing'>deploying</span> to production.",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-past'>deployed</span> to production.",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>deploying</span> to production."
      },
      {
        "present-simple-es": "Tú haces una tarea.",
        "present-simple-en": "You <span class='span-inf'>do</span> a task.",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>doing</span> a task.",
        "past-simple-en": "You <span class='span-past'>did</span> a task.",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>doing</span> a task.",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>do</span> a task.",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>doing</span> a task.",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-past'>done</span> a task.",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>doing</span> a task.",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-past'>done</span> a task.",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>doing</span> a task.",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-past'>done</span> a task.",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>doing</span> a task."
      },
      {
        "present-simple-es": "Tú vas a la oficina.",
        "present-simple-en": "You <span class='span-inf'>go</span> to the office.",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>going</span> to the office.",
        "past-simple-en": "You <span class='span-past'>went</span> to the office.",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>going</span> to the office.",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>go</span> to the office.",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>going</span> to the office.",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-past'>gone</span> to the office.",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>going</span> to the office.",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-past'>gone</span> to the office.",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>going</span> to the office.",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-past'>gone</span> to the office.",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>going</span> to the office."
      },
      {
        "present-simple-es": "Tú eres un desarrollador.",
        "present-simple-en": "You <span class='span-inf'>are</span> a developer.",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>being</span> a developer.",
        "past-simple-en": "You <span class='span-past'>were</span> a developer.",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>being</span> a developer.",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>be</span> a developer.",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>being</span> a developer.",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-past'>been</span> a developer.",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>being</span> a developer.",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-past'>been</span> a developer.",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>being</span> a developer.",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-past'>been</span> a developer.",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>being</span> a developer."
      },
      {
        "present-simple-es": "Tú dices la verdad.",
        "present-simple-en": "You <span class='span-inf'>say</span> the truth.",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>saying</span> the truth.",
        "past-simple-en": "You <span class='span-past'>said</span> the truth.",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>saying</span> the truth.",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>say</span> the truth.",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>saying</span> the truth.",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-past'>said</span> the truth.",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>saying</span> the truth.",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-past'>said</span> the truth.",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>saying</span> the truth.",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-past'>said</span> the truth.",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>saying</span> the truth."
      },
      {
        "present-simple-es": "Tú obtienes un trabajo en usa",
        "present-simple-en": "You <span class='span-inf'>get</span> a job in usa",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>getting</span> a job in usa",
        "past-simple-en": "You <span class='span-past'>got</span> a job in usa",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>getting</span> a job in usa",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>get</span> a job in usa",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>getting</span> a job in usa",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-part'>gotten</span> a job in usa",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>getting</span> a job in usa",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-part'>gotten</span> a job in usa",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>getting</span> a job in usa",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-part'>gotten</span> a job in usa",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>getting</span> a job in usa"
      },
      {
        "present-simple-es": "Tú tienes una reunión a las 10.",
        "present-simple-en": "You <span class='span-inf'>have</span> a meeting at 10.",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>having</span> a meeting at 10.",
        "past-simple-en": "You <span class='span-past'>had</span> a meeting at 10.",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>having</span> a meeting at 10.",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>have</span> a meeting at 10.",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>having</span> a meeting at 10.",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-part'>had</span> a meeting at 10.",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>having</span> a meeting at 10.",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-part'>had</span> a meeting at 10.",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>having</span> a meeting at 10.",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-part'>had</span> a meeting at 10.",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>having</span> a meeting at 10."
      },
      {
        "present-simple-es": "Tú escribes código de alta calidad",
        "present-simple-en": "You <span class='span-inf'>write</span> high quality code",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>writing</span> high quality code",
        "past-simple-en": "You <span class='span-past'>wrote</span> high quality code",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>writing</span> high quality code",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>write</span> high quality code",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>writing</span> high quality code",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-part'>written</span> high quality code",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>writing</span> high quality code",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-part'>written</span> high quality code",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>writing</span> high quality code",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-part'>written</span> high quality code",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>writing</span> high quality code"
      },
      {
        "present-simple-es": "Tú sabes programar en JavaScript",
        "present-simple-en": "You <span class='span-inf'>know</span> how to program in JavaScript",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "past-simple-en": "You <span class='span-past'>learned</span> how to program in JavaScript",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>learn</span> how to program in JavaScript",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>learning</span> how to program in JavaScript"
      },
      {
        "present-simple-es": "Tú tomas decisiones importantes",
        "present-simple-en": "You <span class='span-inf'>take</span> important decisions",
        "present-continuous-en": "You <span class='span-normal'>are</span> <span class='span-ing'>taking</span> important decisions",
        "past-simple-en": "You <span class='span-past'>took</span> important decisions",
        "past-continuous-en": "You <span class='span-normal'>were</span> <span class='span-ing'>taking</span> important decisions",
        "future-simple-en": "You <span class='span-normal'>will</span> <span class='span-inf'>take</span> important decisions",
        "future-continuous-en": "You <span class='span-normal'>will be</span> <span class='span-ing'>taking</span> important decisions",
        "present-perfect-simple-en": "You <span class='span-normal'>have</span> <span class='span-part'>taken</span> important decisions",
        "present-perfect-continuous-en": "You <span class='span-normal'>have been</span> <span class='span-ing'>taking</span> important decisions",
        "past-perfect-simple-en": "You <span class='span-normal'>had</span> <span class='span-part'>taken</span> important decisions",
        "past-perfect-continuous-en": "You <span class='span-normal'>had been</span> <span class='span-ing'>taking</span> important decisions",
        "future-perfect-simple-en": "You <span class='span-normal'>will have</span> <span class='span-part'>taken</span> important decisions",
        "future-perfect-continuous-en": "You <span class='span-normal'>will have been</span> <span class='span-ing'>taking</span> important decisions"
      }
    ],
    "He/She/It" : [
      {
        "present-simple-es": "Él/ella/eso estudia inglés.",
        "present-simple-en": "He/She/It <span class='span-inf'>studies</span> English.",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> study<span class='span-normal'>ing</span> English.",
        "past-simple-en": "He/She/It studi<span class='span-normal'>ed</span> English.",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> study<span class='span-normal'>ing</span> English.",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> study English.",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> study<span class='span-normal'>ing</span> English.",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> studi<span class='span-normal'>ed</span> English.",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>has been</span> study<span class='span-normal'>ing</span> English.",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> studi<span class='span-normal'>ed</span> English.",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> study<span class='span-normal'>ing</span> English.",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> studi<span class='span-normal'>ed</span> English.",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> study<span class='span-normal'>ing</span> English."
      },
      {
        "present-simple-es": "Él/ella/eso toma esa tarea.",
        "present-simple-en": "He/She/It <span class='span-inf'>takes</span> that task.",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>deploying</span> that task.",
        "past-simple-en": "He/She/It <span class='span-past'>took</span> that task.",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>deploying</span> that task.",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>take</span> that task.",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>deploying</span> that task.",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-part'>taken</span> that task.",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>has been</span> <span class='span-ing'>deploying</span> that task.",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-part'>taken</span> that task.",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>deploying</span> that task.",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-part'>taken</span> that task.",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>deploying</span> that task."
      },
      {
        "present-simple-es": "Él/ella/eso pasa a producción.",
        "present-simple-en": "He/She/It <span class='span-inf'>deploys</span> to production.",
        "present-continuous-en": "He/She/It <span class='span-normal'>is </span> <span class='span-ing'>deploying</span> to production.",
        "past-simple-en": "He/She/It <span class='span-past'>deployed</span> to production.",
        "past-continuous-en": "He/She/It <span class='span-normal'>was </span> <span class='span-ing'>deploying</span> to production.",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>deploy</span> to production.",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>deploying</span> to production.",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-past'>deployed</span> to production.",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>has been </span> <span class='span-ing'>deploying</span> to production.",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-past'>deployed</span> to production.",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been </span> <span class='span-ing'>deploying</span> to production.",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-past'>deployed</span> to production.",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>deploying</span> to production."
      },
      {
        "present-simple-es": "Él/ella/eso hace una tarea.",
        "present-simple-en": "He/She/It <span class='span-inf'>does</span> a task.",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>doing</span> a task.",
        "past-simple-en": "He/She/It <span class='span-past'>did</span> a task.",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>doing</span> a task.",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>do</span> a task.",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>doing</span> a task.",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-past'>done</span> a task.",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>doing</span> a task.",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-past'>done</span> a task.",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>doing</span> a task.",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-past'>done</span> a task.",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>doing</span> a task."
      },
      {
        "present-simple-es": "Él/ella/eso va a la oficina.",
        "present-simple-en": "He/She/It <span class='span-inf'>goes</span> to the office.",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>going</span> to the office.",
        "past-simple-en": "He/She/It <span class='span-past'>went</span> to the office.",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>going</span> to the office.",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>go</span> to the office.",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>going</span> to the office.",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-past'>gone</span> to the office.",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>going</span> to the office.",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-past'>gone</span> to the office.",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>going</span> to the office.",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-past'>gone</span> to the office.",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>going</span> to the office."
      },
      {
        "present-simple-es": "Él/ella/eso es un desarrollador.",
        "present-simple-en": "He/She/It <span class='span-inf'>is</span> a developer.",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>being</span> a developer.",
        "past-simple-en": "He/She/It <span class='span-past'>was</span> a developer.",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>being</span> a developer.",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>be</span> a developer.",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>being</span> a developer.",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-past'>been</span> a developer.",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>being</span> a developer.",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-past'>been</span> a developer.",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>being</span> a developer.",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-past'>been</span> a developer.",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>being</span> a developer."
      },
      {
        "present-simple-es": "Él/ella/eso dice la verdad.",
        "present-simple-en": "He/She/It <span class='span-inf'>says</span> the truth.",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>saying</span> the truth.",
        "past-simple-en": "He/She/It <span class='span-past'>said</span> the truth.",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>saying</span> the truth.",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>say</span> the truth.",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>saying</span> the truth.",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-past'>said</span> the truth.",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>saying</span> the truth.",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-past'>said</span> the truth.",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>saying</span> the truth.",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-past'>said</span> the truth.",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>saying</span> the truth."
      },
      {
        "present-simple-es": "Él/ella/eso obtiene un trabajo en usa",
        "present-simple-en": "He/She/It <span class='span-inf'>gets</span> a job in usa",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>getting</span> a job in usa",
        "past-simple-en": "He/She/It <span class='span-past'>got</span> a job in usa",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>getting</span> a job in usa",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>get</span> a job in usa",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>getting</span> a job in usa",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-part'>gotten</span> a job in usa",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>getting</span> a job in usa",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-part'>gotten</span> a job in usa",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>getting</span> a job in usa",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-part'>gotten</span> a job in usa",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>getting</span> a job in usa"
      },
      {
        "present-simple-es": "Él/ella/eso tiene una reunión a las 10.",
        "present-simple-en": "He/She/It <span class='span-inf'>has</span> a meeting at 10.",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>having</span> a meeting at 10.",
        "past-simple-en": "He/She/It <span class='span-past'>had</span> a meeting at 10.",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>having</span> a meeting at 10.",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>have</span> a meeting at 10.",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>having</span> a meeting at 10.",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-part'>had</span> a meeting at 10.",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>having</span> a meeting at 10.",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-part'>had</span> a meeting at 10.",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>having</span> a meeting at 10.",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-part'>had</span> a meeting at 10.",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>having</span> a meeting at 10."
      },
      {
        "present-simple-es": "Él/ella/eso escribe código de alta calidad",
        "present-simple-en": "He/She/It <span class='span-inf'>writes</span> high quality code",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>writing</span> high quality code",
        "past-simple-en": "He/She/It <span class='span-past'>wrote</span> high quality code",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>writing</span> high quality code",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>write</span> high quality code",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>writing</span> high quality code",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-part'>written</span> high quality code",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>writing</span> high quality code",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-part'>written</span> high quality code",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>writing</span> high quality code",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-part'>written</span> high quality code",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>writing</span> high quality code"
      },
      {
        "present-simple-es": "Él/ella/eso sabe programar en JavaScript",
        "present-simple-en": "He/She/It <span class='span-inf'>knows</span> how to program in JavaScript",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "past-simple-en": "He/She/It <span class='span-past'>learned</span> how to program in JavaScript",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>learn</span> how to program in JavaScript",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>learning</span> how to program in JavaScript"
      },
      {
        "present-simple-es": "Él/ella/eso toma decisiones importantes",
        "present-simple-en": "He/She/It <span class='span-inf'>takes</span> important decisions",
        "present-continuous-en": "He/She/It <span class='span-normal'>is</span> <span class='span-ing'>taking</span> important decisions",
        "past-simple-en": "He/She/It <span class='span-past'>took</span> important decisions",
        "past-continuous-en": "He/She/It <span class='span-normal'>was</span> <span class='span-ing'>taking</span> important decisions",
        "future-simple-en": "He/She/It <span class='span-normal'>will</span> <span class='span-inf'>take</span> important decisions",
        "future-continuous-en": "He/She/It <span class='span-normal'>will be</span> <span class='span-ing'>taking</span> important decisions",
        "present-perfect-simple-en": "He/She/It <span class='span-normal'>has</span> <span class='span-part'>taken</span> important decisions",
        "present-perfect-continuous-en": "He/She/It <span class='span-normal'>have been</span> <span class='span-ing'>taking</span> important decisions",
        "past-perfect-simple-en": "He/She/It <span class='span-normal'>had</span> <span class='span-part'>taken</span> important decisions",
        "past-perfect-continuous-en": "He/She/It <span class='span-normal'>had been</span> <span class='span-ing'>taking</span> important decisions",
        "future-perfect-simple-en": "He/She/It <span class='span-normal'>will have</span> <span class='span-part'>taken</span> important decisions",
        "future-perfect-continuous-en": "He/She/It <span class='span-normal'>will have been</span> <span class='span-ing'>taking</span> important decisions"
      }    
    ],
    "We/They" : [
      {
        "present-simple-es": "Nosotros/ellos estudian inglés.",
        "present-simple-en": "We/They <span class='span-inf'>study</span> English.",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> study<span class='span-normal'>ing</span> English.",
        "past-simple-en": "We/They studi<span class='span-normal'>ed</span> English.",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> study<span class='span-normal'>ing</span> English.",
        "future-simple-en": "We/They <span class='span-normal'>will</span> study English.",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> study<span class='span-normal'>ing</span> English.",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> studi<span class='span-normal'>ed</span> English.",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> study<span class='span-normal'>ing</span> English.",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> studi<span class='span-normal'>ed</span> English.",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> study<span class='span-normal'>ing</span> English.",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> studi<span class='span-normal'>ed</span> English.",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> study<span class='span-normal'>ing</span> English."
      },
      {
        "present-simple-es": "Nosotros/ellos toman esa tarea.",
        "present-simple-en": "We/They <span class='span-inf'>take</span> that task.",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>deploying</span> that task.",
        "past-simple-en": "We/They <span class='span-past'>took</span> that task.",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>deploying</span> that task.",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>take</span> that task.",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>deploying</span> that task.",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-part'>taken</span> that task.",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>deploying</span> that task.",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-part'>taken</span> that task.",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>deploying</span> that task.",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-part'>taken</span> that task.",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>deploying</span> that task."
      },
      {
        "present-simple-es": "Nosotros/ellos pasan a producción.",
        "present-simple-en": "We/They <span class='span-inf'>deploy</span> to production.",
        "present-continuous-en": "We/They <span class='span-normal'>are </span> <span class='span-ing'>deploying</span> to production.",
        "past-simple-en": "We/They <span class='span-past'>deployed</span> to production.",
        "past-continuous-en": "We/They <span class='span-normal'>were </span> <span class='span-ing'>deploying</span> to production.",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>deploy</span> to production.",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>deploying</span> to production.",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-past'>deployed</span> to production.",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been </span> <span class='span-ing'>deploying</span> to production.",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-past'>deployed</span> to production.",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been </span> <span class='span-ing'>deploying</span> to production.",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-past'>deployed</span> to production.",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>deploying</span> to production."
      },
      {
        "present-simple-es": "Nosotros/ellos hacen una tarea.",
        "present-simple-en": "We/They <span class='span-inf'>do</span> a task.",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>doing</span> a task.",
        "past-simple-en": "We/They <span class='span-past'>did</span> a task.",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>doing</span> a task.",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>do</span> a task.",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>doing</span> a task.",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-past'>done</span> a task.",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>doing</span> a task.",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-past'>done</span> a task.",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>doing</span> a task.",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-past'>done</span> a task.",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>doing</span> a task."
      },
      {
        "present-simple-es": "Nosotros/ellos van a la oficina.",
        "present-simple-en": "We/They <span class='span-inf'>go</span> to the office.",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>going</span> to the office.",
        "past-simple-en": "We/They <span class='span-past'>went</span> to the office.",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>going</span> to the office.",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>go</span> to the office.",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>going</span> to the office.",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-past'>gone</span> to the office.",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>going</span> to the office.",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-past'>gone</span> to the office.",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>going</span> to the office.",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-past'>gone</span> to the office.",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>going</span> to the office."
      },
      {
        "present-simple-es": "Nosotros/ellos son desarrolladores.",
        "present-simple-en": "We/They <span class='span-inf'>are</span> developers.",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>being</span> developers.",
        "past-simple-en": "We/They <span class='span-past'>were</span> developers.",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>being</span> developers.",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>be</span> developers.",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>being</span> developers.",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-past'>been</span> developers.",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>being</span> developers.",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-past'>been</span> developers.",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>being</span> developers.",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-past'>been</span> developers.",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>being</span> developers."
      },
      {
        "present-simple-es": "Nosotros/ellos dicen la verdad.",
        "present-simple-en": "We/They <span class='span-inf'>say</span> the truth.",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>saying</span> the truth.",
        "past-simple-en": "We/They <span class='span-past'>said</span> the truth.",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>saying</span> the truth.",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>say</span> the truth.",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>saying</span> the truth.",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-past'>said</span> the truth.",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>saying</span> the truth.",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-past'>said</span> the truth.",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>saying</span> the truth.",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-past'>said</span> the truth.",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>saying</span> the truth."
      },
      {
        "present-simple-es": "Nosotros/ellos obtienen un trabajo en usa",
        "present-simple-en": "We/They <span class='span-inf'>get</span> a job in usa",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>getting</span> a job in usa",
        "past-simple-en": "We/They <span class='span-past'>got</span> a job in usa",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>getting</span> a job in usa",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>get</span> a job in usa",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>getting</span> a job in usa",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-part'>gotten</span> a job in usa",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>getting</span> a job in usa",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-part'>gotten</span> a job in usa",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>getting</span> a job in usa",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-part'>gotten</span> a job in usa",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>getting</span> a job in usa"
      },
      {
        "present-simple-es": "Nosotros/ellos tienen una reunión a las 10.",
        "present-simple-en": "We/They <span class='span-inf'>have</span> a meeting at 10.",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>having</span> a meeting at 10.",
        "past-simple-en": "We/They <span class='span-past'>had</span> a meeting at 10.",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>having</span> a meeting at 10.",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>have</span> a meeting at 10.",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>having</span> a meeting at 10.",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-part'>had</span> a meeting at 10.",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>having</span> a meeting at 10.",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-part'>had</span> a meeting at 10.",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>having</span> a meeting at 10.",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-part'>had</span> a meeting at 10.",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>having</span> a meeting at 10."
      },
      {
        "present-simple-es": "Nosotros/ellos escriben código de alta calidad",
        "present-simple-en": "We/They <span class='span-inf'>write</span> high quality code",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>writing</span> high quality code",
        "past-simple-en": "We/They <span class='span-past'>wrote</span> high quality code",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>writing</span> high quality code",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>write</span> high quality code",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>writing</span> high quality code",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-part'>written</span> high quality code",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>writing</span> high quality code",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-part'>written</span> high quality code",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>writing</span> high quality code",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-part'>written</span> high quality code",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>writing</span> high quality code"
      },
      {
        "present-simple-es": "Nosotros/ellos saben programar en JavaScript",
        "present-simple-en": "We/They <span class='span-inf'>know</span> how to program in JavaScript",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "past-simple-en": "We/They <span class='span-past'>learned</span> how to program in JavaScript",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>learn</span> how to program in JavaScript",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>learning</span> how to program in JavaScript",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-part'>learned</span> how to program in JavaScript",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>learning</span> how to program in JavaScript"
      },
      {
        "present-simple-es": "Nosotros/ellos toman decisiones importantes",
        "present-simple-en": "We/They <span class='span-inf'>take</span> important decisions",
        "present-continuous-en": "We/They <span class='span-normal'>are</span> <span class='span-ing'>taking</span> important decisions",
        "past-simple-en": "We/They <span class='span-past'>took</span> important decisions",
        "past-continuous-en": "We/They <span class='span-normal'>were</span> <span class='span-ing'>taking</span> important decisions",
        "future-simple-en": "We/They <span class='span-normal'>will</span> <span class='span-inf'>take</span> important decisions",
        "future-continuous-en": "We/They <span class='span-normal'>will be</span> <span class='span-ing'>taking</span> important decisions",
        "present-perfect-simple-en": "We/They <span class='span-normal'>have</span> <span class='span-part'>taken</span> important decisions",
        "present-perfect-continuous-en": "We/They <span class='span-normal'>have been</span> <span class='span-ing'>taking</span> important decisions",
        "past-perfect-simple-en": "We/They <span class='span-normal'>had</span> <span class='span-part'>taken</span> important decisions",
        "past-perfect-continuous-en": "We/They <span class='span-normal'>had been</span> <span class='span-ing'>taking</span> important decisions",
        "future-perfect-simple-en": "We/They <span class='span-normal'>will have</span> <span class='span-part'>taken</span> important decisions",
        "future-perfect-continuous-en": "We/They <span class='span-normal'>will have been</span> <span class='span-ing'>taking</span> important decisions"
      }
      ]
  };
  options_question  = {
    "I" : [

    ],
    "You" : [
        
      ],
    "He/She/It" : [
        
      ],
    "We/They" : [
        
      ]

  };
  examples = [
    
  ];
  constructor() {}

  ngOnInit() {
    this.examples = this.options[this.indice_s];
  }
 
}
