import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageObjectComponent } from './components/image-object/image-object.component';
import { NewsObjectComponent } from './components/news-object/news-object.component';
import { SelectClassificatorComponent } from './components/select-classificator/select-classificator.component';
import { CvEspComponent } from './cv/cv-esp.component';
import { ExperienceComponent } from './cv/professional-experience/experience/experience.component';
import { ProfessionalExperienceComponent } from './cv/professional-experience/professional-experience.component';
import { ProfessionalSkillsComponent } from './cv/professional-skills/professional-skills.component';
import { SkillsComponent } from './cv/professional-skills/skill/skills.component';
import { StudiesComponent } from './cv/studies/studies.component';
import { StudyComponent } from './cv/studies/study/study.component';
import { GameComponent } from './game2048/game2048.component';
import { Game2048Component } from './game2048/game2048/game2048.component';
import { DifficultGameOptionsComponent } from './pokemonGame/difficult-game-options/difficult-game-options.component';
import { DiscoveryPanelComponent } from './pokemonGame/discovery-panel/discovery-panel.component';
import { PokemonToDiscoveryComponent } from './pokemonGame/pokemon-to-discovery/pokemon-to-discovery.component';
import { PokemonGameComponent } from './pokemonGame/pokemonGame.component';
import { BoardComponent } from './tictactoegame/board/board.component';
import { CellComponent } from './tictactoegame/board/cell/cell.component';
import { GameTicTacToeComponent } from './tictactoegame/game/game.component';
import { ItemComponent } from './todolist/item/item.component';
import { WebBdComponent } from './web-bd/web-bd.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import {NewHomeComponent} from './new-home/new-home.component';
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
    NewHomeComponent,
    WebBdComponent,
    ItemComponent,
    Game2048Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
