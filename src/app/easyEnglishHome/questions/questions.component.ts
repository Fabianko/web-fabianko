import { Component, OnInit, Pipe } from '@angular/core';

@Component({
    selector: 'eeQuestions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.less'],
  })
  export class QuestionsComponent implements OnInit {
    constructor() { }
  
    ngOnInit() {
    }

    kindsOfQuestionsWh:QuestionDTO[] = [
        {
            "type": "What",
            "description": "'what' is used to ask about things or objects",
            "example": "What is your name?",
            "answer": "My name is Fabián"
        },
        {
            "type": "Where",
            "description": "'where' is used to ask about places",
            "example": "Where are you from?",
            "answer": "I am (I'm) from Chile"
        },
        {
            "type": "When",
            "description": "'when' is used to ask about time",
            "example": "When is your birthday?",
            "answer": "My birthday is on October 18st"
        },
        {
            "type": "Who",
            "description": "'who' is used to ask about people",
            "example": "Who is your best friend?",
            "answer": "My best friend is Peter"
        },
        {
            "type": "Why",
            "description": "'why' is used to ask about reasons",
            "example": "Why are you sad?",
            "answer": "I am sad because my dog died"
        },
        {
            "type": "Which",
            "description": "'which' is used to ask about a choice",
            "example": "Which do you prefer, tea or coffee?",
            "answer": "I prefer coffee"
        },
        {
            "type": "Whose",
            "description": "'whose' is used to ask about possession",
            "example": "Whose book is this?",
            "answer": "This is my book"
            
        }
    ]
    // i need questions and answers on office or work
    kindsOfQuestionsH:QuestionDTO[] = [
        {
            "type": "How",
            "description": "'how' is used to ask about the way something is done",
            "example": "How do you go to work?",
            "answer": "I go to work by bus"
        },
        {
            "type": "How many",
            "description": "'how many' is used to ask about the number of things",
            "example": "How many brothers do you have?",
            "answer": "I have two brothers"
        },
        {
            "type": "How much",
            "description": "'how much' is used to ask about the quantity of something",
            "example": "How much money do you have?",
            "answer": "I have 100 dollars"
        },
        {
            "type": "How far",
            "description": "'how far' is used to ask about distance",
            "example": "How far is your house from here?",
            "answer": "My house is 5 kilometers from here"
        },
        {
            "type": "How long",
            "description": "'how long' is used to ask about the duration of something",
            "example": "How long does it take to get to your house?",
            "answer": "It takes 10 minutes"
        },
        {
            "type": "How often",
            "description": "'how often' is used to ask about frequency",
            "example": "How often do you go to the gym?",
            "answer": "I go to the gym twice a week"
        },
        {
            "type": "How old",
            "description": "'how old' is used to ask about age",
            "example": "How old are you?",
            "answer": "I am 30 years"
        }
    ]
    kindsOfQuestionsYesNo:QuestionDTO[] = [
        {
            "type": "To be",
            "description": "To be questions are questions that require the verb 'to be' in the answer",
            "example": "Are you a student?",
            "answer": "Yes, I am"
        },
        {
            "type": "Do",
            "description": "Do questions are questions that require the verb 'do' in the answer",
            "example": "Do you like coffee?",
            "answer": "Yes, I do"
        },
        {
            "type": "Does",
            "description": "Does questions are questions that require the verb 'does' in the answer",
            "example": "Does she like chocolate?",
            "answer": "Yes, she does"
        },
        {
            "type": "Did",
            "description": "Did questions are questions that require the verb 'did' in the answer",
            "example": "Did you go to the party?",
            "answer": "Yes, I did"
        },
        {
            "type": "Can",
            "description": "Can questions are questions that require the verb 'can' in the answer",
            "example": "Can you swim?",
            "answer": "Yes, I can"
        },
        {
            "type": "Will",
            "description": "Will questions are questions that require the verb 'will' in the answer",
            "example": "Will you come to the party?",
            "answer": "Yes, I will"
        },
        {
            "type": "Would",
            "description": "Would questions are questions that require the verb 'would' in the answer",
            "example": "Would you like a coffee?",
            "answer": "Yes, I would"
        }



    ]
    
  }

  // definiciòn de  QuestionDTO 
    export class QuestionDTO {
        type: string;
        description: string;
        example: string;
        answer?: string;
    }