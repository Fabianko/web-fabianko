import { ImageObjectComponent } from './components/image-object/image-object.component';
import { NewsObjectComponent } from './components/news-object/news-object.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SelectClassificatorComponent } from './components/select-classificator/select-classificator.component';

import { CvEspComponent } from './cv/cv-esp.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import { WebBdComponent } from './web-bd/web-bd.component';
import {StudiesComponent} from './cv/studies/studies.component';
import {StudyComponent} from './cv/studies/study/study.component';
import {ProfessionalExperienceComponent} from './cv/professional-experience/professional-experience.component';
import {ProfessionalSkillsComponent} from './cv/professional-skills/professional-skills.component';
import {SkillsComponent} from './cv/professional-skills/skill/skills.component';
import {ExperienceComponent} from './cv/professional-experience/experience/experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ItemComponent} from './web-bd/item/item.component';
import {GameComponent} from './game2048/game2048.component';
import {Game2048Component} from './game2048/game2048/game2048.component';
import {PokemonGameComponent} from './pokemonGame/pokemonGame.component';
import {ApiPokemonService} from './pokemonGame/api-pokemon.service';
import { DifficultGameOptionsComponent } from './pokemonGame/difficult-game-options/difficult-game-options.component';
import { PokemonToDiscoveryComponent } from './pokemonGame/pokemon-to-discovery/pokemon-to-discovery.component';
import { DiscoveryPanelComponent } from './pokemonGame/discovery-panel/discovery-panel.component';
import {GameTicTacToeComponent} from './tictactoegame/game/game.component';
import {BoardComponent} from './tictactoegame/board/board.component';
import {CellComponent} from './tictactoegame/board/cell/cell.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

const routes: Routes = [
  { path: '',
    redirectTo: '/helloworld',
    pathMatch: 'full'
  },
  { path: 'web-bd', component: WebBdComponent },
  { path: 'helloworld', component: WelcomeHomeComponent },
  {path:'test-news', component: HeaderComponent},
  { path: 'cv', component: CvEspComponent },
  { path: '2048', component: GameComponent },
  { path: 'pokemonGame', component: PokemonGameComponent },
  { path: 'tictactoe', component: GameTicTacToeComponent},
  { path: '**',
    redirectTo: '/helloworld',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    CellComponent,
    BoardComponent,
    GameTicTacToeComponent,
    GameComponent,
    PokemonGameComponent,
    DifficultGameOptionsComponent,
    DiscoveryPanelComponent,
    PokemonToDiscoveryComponent,
    SkillsComponent,
    ExperienceComponent,
    StudyComponent,
    ProfessionalExperienceComponent,
    ProfessionalSkillsComponent,
    StudiesComponent,
    AppComponent,
    HeaderComponent,
    SelectClassificatorComponent,
    NewsObjectComponent,
    ImageObjectComponent,
    CvEspComponent,
    WelcomeHomeComponent,
    WebBdComponent,
    ItemComponent,
    Game2048Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    FontAwesomeModule
  ],
  exports: [RouterModule],
  providers: [ApiPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
