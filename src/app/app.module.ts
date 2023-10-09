import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './web-news-classificator/header/header.component';
import { ImageObjectComponent } from './web-news-classificator/image-object/image-object.component';
import { NewsObjectComponent } from './web-news-classificator/news-object/news-object.component';
import { SelectClassificatorComponent } from './web-news-classificator/select-classificator/select-classificator.component';
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
import { WebBdComponent } from './web-bd/web-bd.component';
import { ItemComponent } from './web-bd/item/item.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { News2ObjectComponent } from './web-news-classificator/news2-object/news2-object.component';
import { EeHomeComponent } from './easyEnglishHome/home.component';
import { TipsComponent } from './easyEnglishHome/easyEnglishTips/tips.component';
import { ConditionalSentencesComponent } from './easyEnglishHome/easyEnglishConditionalSentences/conditional-sentences.component';
import { VerbalTensesComponent } from './easyEnglishHome/easyEnglishVerbalTenses/verbal-tenses.component';
import { PhrasalVerbsComponent } from './easyEnglishHome/easyEnglishPhrasalVerbs/phrasal-verbs.component';
import { ReadNewsComponent } from './easyEnglishHome/readNews/read-news.component';
import { DevTipsComponent } from './dev-tips/dev-tips.component';
import { LocalTodolistComponent } from './local-todolist/local-todolist.component';
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
    NewHomeComponent,
    WebBdComponent,
    Game2048Component,
    TipsComponent,
    EeHomeComponent,
    VerbalTensesComponent,
    ConditionalSentencesComponent,
    PhrasalVerbsComponent,
    News2ObjectComponent,
    ReadNewsComponent,
    DevTipsComponent,
    LocalTodolistComponent,
    ItemComponent

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
