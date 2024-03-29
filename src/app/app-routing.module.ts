import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './web-news-classificator/header/header.component';
import { CvEspComponent } from './cv/cv-esp.component';
import { GameComponent } from './game2048/game2048.component';
import { PokemonGameComponent } from './pokemonGame/pokemonGame.component';
import { GameTicTacToeComponent } from './tictactoegame/game/game.component';
import { WebBdComponent } from './web-bd/web-bd.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { TipsComponent } from './easyEnglishHome/easyEnglishTips/tips.component';
import { EeHomeComponent } from './easyEnglishHome/home.component';
import { ConditionalSentencesComponent } from './easyEnglishHome/easyEnglishConditionalSentences/conditional-sentences.component';
import { VerbalTensesComponent } from './easyEnglishHome/easyEnglishVerbalTenses/verbal-tenses.component';
import { PhrasalVerbsComponent } from './easyEnglishHome/easyEnglishPhrasalVerbs/phrasal-verbs.component';
import { ReadNewsComponent } from './easyEnglishHome/readNews/read-news.component';
import { DevTipsComponent } from './dev-tips/dev-tips.component';
import { LocalTodolistComponent } from './local-todolist/local-todolist.component';
import { irregularVerbsComponent } from './easyEnglishHome/IrregularVerbs/irregular-verbs.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/helloworld',
    pathMatch: 'full'
  },
  { path: 'web-bd', component: WebBdComponent},
  { path: 'helloworld', component: NewHomeComponent},
  { path: 'news', component: HeaderComponent},
  { path: 'cv', component: CvEspComponent},
  { path: '2048', component: GameComponent},
  { path: 'pokemonGame', component: PokemonGameComponent},
  { path: 'tictactoe', component: GameTicTacToeComponent},
  
  { path: 'ee', component: EeHomeComponent,
    children: [
      { path: 'tips', component: TipsComponent},
      { path: 'verbalTenses', component: VerbalTensesComponent },
      { path: 'conditionalSentences', component: ConditionalSentencesComponent},
      { path: 'phrasalVerbs', component: PhrasalVerbsComponent},
      { path: 'readNews', component: ReadNewsComponent},
      { path: 'irregularVerbs', component: irregularVerbsComponent},

    ]
  },
  { path: 'dev-tips', component: DevTipsComponent },
  { path: 'local-todolist', component: LocalTodolistComponent},
  { path: '**',
    redirectTo: '/helloworld',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
