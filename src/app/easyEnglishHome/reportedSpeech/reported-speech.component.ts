import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'eeQuestions',
  templateUrl: './reported-speech.component.html',
  styleUrls: ['./reported-speech.component.less'],
})
export class ReportedSpeechComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  listReportingVerbs = [
    {
      verb: 'Say',
      verbEs: 'Decir',
      example: 'He said he would be late.',
      exampleEs: 'Él dijo que llegaría tarde.',
    },
    {
      verb: 'Tell',
      verbEs: 'Decir',
      example: 'She told me about her holiday.',
      exampleEs: 'Ella me contó sobre sus vacaciones.',
    },
    {
      verb: 'Report',
      verbEs: 'Informar',
      example: 'The journalist reported that the event was a success.',
      exampleEs: 'El periodista informó que el evento fue un éxito.',
    },
    {
      verb: 'Claim',
      verbEs: 'Afirmar',
      example: 'He claims that he was not there at the time.',
      exampleEs: 'Él afirma que no estaba allí en ese momento.',
    },
    {
      verb: 'Explain',
      verbEs: 'Explicar',
      example: 'She explained how to solve the problem.',
      exampleEs: 'Ella explicó cómo resolver el problema.',
    },
    {
      verb: 'Describe',
      verbEs: 'Describir',
      example: 'He described the scene in detail.',
      exampleEs: 'Él describió la escena en detalle.',
    },
    {
      verb: 'State',
      verbEs: 'Declarar',
      example: 'The witness stated that she had seen him leaving the building.',
      exampleEs: 'El testigo declaró que lo había visto salir del edificio.',
    },
    {
      verb: 'Announce',
      verbEs: 'Anunciar',
      example: 'They announced the arrival of a new product.',
      exampleEs: 'Anunciaron la llegada de un nuevo producto.',
    },
    {
      verb: 'Mention',
      verbEs: 'Mencionar',
      example: 'She mentioned that she was going to be busy all week.',
      exampleEs: 'Ella mencionó que estaría ocupada toda la semana.',
    },
    {
      verb: 'Suggest',
      verbEs: 'Sugerir',
      example: 'He suggested going to the cinema.',
      exampleEs: 'Él sugirió ir al cine.',
    },
    {
      verb: 'Advise',
      verbEs: 'Aconsejar',
      example: 'The lawyer advised her client to remain silent.',
      exampleEs: 'El abogado aconsejó a su cliente permanecer en silencio.',
    },
    {
      verb: 'Warn',
      verbEs: 'Advertir',
      example: 'She warned him not to be late.',
      exampleEs: 'Ella le advirtió que no llegara tarde.',
    },
    {
      verb: 'Offer',
      verbEs: 'Ofrecer',
      example: 'He offered to help her with her project.',
      exampleEs: 'Él ofreció ayudarla con su proyecto.',
    },
    {
      verb: 'Agree',
      verbEs: 'Acordar',
      example: 'They agreed that it was the best solution.',
      exampleEs: 'Ellos acordaron que era la mejor solución.',
    },
    {
      verb: 'Disagree',
      verbEs: 'Discrepar',
      example: 'He disagreed with the final decision.',
      exampleEs: 'Él discrepó con la decisión final.',
    },
    {
      verb: 'Promise',
      verbEs: 'Prometer',
      example: 'She promised to return the book tomorrow.',
      exampleEs: 'Ella prometió devolver el libro mañana.',
    },
    {
      verb: 'Refuse',
      verbEs: 'Rechazar',
      example: 'He refused to answer the question.',
      exampleEs: 'Él rechazó responder la pregunta.',
    },
    {
      verb: 'Deny',
      verbEs: 'Negar',
      example: 'She denied stealing the money.',
      exampleEs: 'Ella negó haber robado el dinero.',
    },
    {
      verb: 'Admit',
      verbEs: 'Admitir',
      example: 'He admitted that he had made a mistake.',
      exampleEs: 'Él admitió que había cometido un error.',
    },
    {
      verb: 'Argue',
      verbEs: 'Argumentar',
      example: 'They argued that their approach was more efficient.',
      exampleEs: 'Ellos argumentaron que su enfoque era más eficiente.',
    },

    {
      verb: 'Acknowledge',
      verbEs: 'Reconocer',
      example: 'He acknowledged the hard work of his team.',
      exampleEs: 'Él reconoció el arduo trabajo de su equipo.',
    },
    {
      verb: 'Assure',
      verbEs: 'Asegurar',
      example:
        'She assured the client that the project would be completed on time.',
      exampleEs:
        'Ella aseguró al cliente que el proyecto se completaría a tiempo.',
    },
    {
      verb: 'Confirm',
      verbEs: 'Confirmar',
      example: 'I confirm receipt of your email.',
      exampleEs: 'Confirmo la recepción de tu correo electrónico.',
    },
    {
      verb: 'Convey',
      verbEs: 'Transmitir',
      example: 'He conveyed the requirements to the team.',
      exampleEs: 'Él transmitió los requisitos al equipo.',
    },
    {
      verb: 'Declare',
      verbEs: 'Declarar',
      example: 'The manager declared the meeting open.',
      exampleEs: 'El gerente declaró abierta la reunión.',
    },
    {
      verb: 'Emphasize',
      verbEs: 'Enfatizar',
      example: 'She emphasized the importance of customer satisfaction.',
      exampleEs: 'Ella enfatizó la importancia de la satisfacción del cliente.',
    },
    {
      verb: 'Endorse',
      verbEs: 'Endosar',
      example: 'The director endorsed the new strategic plan.',
      exampleEs: 'El director endorsó el nuevo plan estratégico.',
    },
    {
      verb: 'Highlight',
      verbEs: 'Destacar',
      example: 'He highlighted the main points in the report.',
      exampleEs: 'Él destacó los puntos principales en el informe.',
    },
    {
      verb: 'Illustrate',
      verbEs: 'Ilustrar',
      example: 'She illustrated her point with a clear example.',
      exampleEs: 'Ella ilustró su punto con un ejemplo claro.',
    },
    {
      verb: 'Imply',
      verbEs: 'Insinuar',
      example: 'His tone implied some dissatisfaction with the process.',
      exampleEs: 'Su tono insinuó cierta insatisfacción con el proceso.',
    },
    {
      verb: 'Inform',
      verbEs: 'Informar',
      example: 'Please inform the team about the schedule changes.',
      exampleEs:
        'Por favor, informa al equipo sobre los cambios en el calendario.',
    },
    {
      verb: 'Instruct',
      verbEs: 'Instruir',
      example: 'The supervisor instructed the employees on safety procedures.',
      exampleEs:
        'El supervisor instruyó a los empleados sobre los procedimientos de seguridad.',
    },
    {
      verb: 'Persuade',
      verbEs: 'Persuadir',
      example: 'He persuaded the team to adopt a new approach.',
      exampleEs: 'Él persuadió al equipo para adoptar un nuevo enfoque.',
    },
    {
      verb: 'Present',
      verbEs: 'Presentar',
      example: 'She presented the proposal to the board.',
      exampleEs: 'Ella presentó la propuesta a la junta.',
    },
    {
      verb: 'Propose',
      verbEs: 'Proponer',
      example: 'I propose we postpone the decision until the next meeting.',
      exampleEs:
        'Propongo que pospongamos la decisión hasta la próxima reunión.',
    },
    {
      verb: 'Recommend',
      verbEs: 'Recomendar',
      example: 'The consultant recommended a more efficient process.',
      exampleEs: 'El consultor recomendó un proceso más eficiente.',
    },
    {
      verb: 'Remind',
      verbEs: 'Recordar',
      example: 'He reminded the team of the deadlines.',
      exampleEs: 'Él recordó al equipo los plazos de entrega.',
    },
    {
      verb: 'Request',
      verbEs: 'Solicitar',
      example: 'She requested additional resources for her department.',
      exampleEs: 'Ella solicitó recursos adicionales para su departamento.',
    },
    {
      verb: 'Specify',
      verbEs: 'Especificar',
      example: 'Please specify the requirements for the project.',
      exampleEs: 'Por favor, especifica los requisitos para el proyecto.',
    },
    {
      verb: 'Urge',
      verbEs: 'Instar',
      example: 'The manager urged the team to focus on quality.',
      exampleEs: 'El gerente instó al equipo a centrarse en la calidad.',
    },
  ];
}
