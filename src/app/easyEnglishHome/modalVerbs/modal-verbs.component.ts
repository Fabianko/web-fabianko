import { Component, OnInit, Pipe } from '@angular/core';

@Component({
    selector: 'eeModalVerbs',
    templateUrl: './modal-verbs.component.html',
    styleUrls: ['./modal-verbs.component.less'],
  })
  export class ModalVerbsComponent implements OnInit {
    modalVerbs = [
        {
            "type": "permission",
            "typeEs": "permiso",
            "options" : [
                {
                    "modal": "can",
                    "example": "Can i come with you?",
                    "exampleEs": "¿Puedo venir contigo?",
                    "bgColor": "#f72585",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "could",
                    "example": "Could you help me with my homework?",
                    "exampleEs": "¿Podrías ayudarme con mi tarea?",
                    "bgColor": "#7209b7",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "may",
                    "example": "May I go to the bathroom?",
                    "exampleEs": "¿Puedo ir al baño?",
                    "bgColor": "#3a0ca3",
                    "txtColor": "#ffffff"
                }
            ],
        },
        {
            "type": "favor",
            "typeEs": "favor",
            "options" : [
                {
                    "modal": "can",
                    "example": "Can you wait a minute?",
                    "exampleEs": "¿Puedes esperar un minuto?",
                    "bgColor": "#4361ee",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "could",
                    "example": "Could you do me a favor?",
                    "exampleEs": "¿Podrías hacerme un favor?",
                    "bgColor": "#4cc9f0",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "would",
                    "example": "Would you send this for me?",
                    "exampleEs": "¿Podrías enviar esto por mí?",
                    "bgColor": "#f72585",
                    "txtColor": "#ffffff"
                }
            ],
        },
        {
            "type": "ability",
            "typeEs": "habilidad",
            "options" : [
                {
                    "modal": "can",
                    "example": "Can you speak English?",
                    "exampleEs": "¿Puedes hablar inglés?",
                    "bgColor": "#7209b7",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "could",
                    "example": "I could swim when I was a child",
                    "exampleEs": "Podía nadar cuando era niño",
                    "bgColor": "#3a0ca3",
                    "txtColor": "#ffffff"
                }
            ],
        },
        {
            "type": "obligation",
            "typeEs": "Obligación",
            "options" : [
                {
                    "modal": "must",
                    "example": "You must do your homework",
                    "exampleEs": "Debes hacer tu tarea",
                    "bgColor": "#4361ee",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "have to",
                    "example": "You have to do your homework",
                    "exampleEs": "Debes hacer tu tarea",
                    "bgColor": "#4cc9f0",
                    "txtColor": "#ffffff"
                }
            ],
        },
        {
            "type": "posibility",
            "typeEs": "posibilidad",
            "options" : [
                {
                    "modal": "may",
                    "example": "It may rain tomorrow",
                    "exampleEs": "Puede que llueva mañana",
                    "bgColor": "#f72585",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "might",
                    "example": "It might rain tomorrow",
                    "exampleEs": "Puede que llueva mañana",
                    "bgColor": "#7209b7",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "could",
                    "example": "It could rain tomorrow",
                    "exampleEs": "Puede que llueva mañana",
                    "bgColor": "#3a0ca3",
                    "txtColor": "#ffffff"
                }
            ],
        },
        {
            "type": "suggestions",
            "typeEs": "sugerencias",
            "options" : [
                {
                    "modal": "shall",
                    "example": "Shall we go to the cinema?",
                    "exampleEs": "¿Vamos al cine?",
                    "bgColor": "#4361ee",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "should",
                    "example": "You should go to the doctor",
                    "exampleEs": "Deberías ir al doctor",
                    "bgColor": "#4cc9f0",
                    "txtColor": "#ffffff"
                }
            ],
        },
        {
            "type": "logical conclusion",
            "typeEs": "conclusión lógica",
            "options" : [
                {
                    "modal": "must",
                    "example": "You must be tired",
                    "exampleEs": "Debes estar cansado",
                    "bgColor": "#f72585",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "should",
                    "example": "You should be happy",
                    "exampleEs": "Deberías estar feliz",
                    "bgColor": "#7209b7",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "can't",
                    "example": "You can't be serious",
                    "exampleEs": "No puedes estar en serio",
                    "bgColor": "#3a0ca3",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "may",
                    "example": "He may be at home",
                    "exampleEs": "Él puede estar en casa",
                    "bgColor": "#4361ee",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "might",
                    "example": "He might be at home",
                    "exampleEs": "Él puede estar en casa",
                    "bgColor": "#4cc9f0",
                    "txtColor": "#ffffff"
                },
                {
                    "modal": "could",
                    "example": "He could be at home",
                    "exampleEs": "Él puede estar en casa",
                    "bgColor": "#f72585",
                    "txtColor": "#ffffff"
                }
            ],
        }

    ]
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }