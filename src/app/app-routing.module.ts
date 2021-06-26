import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CvEspComponent } from './cv/cv-esp.component';
import { GameComponent } from './game2048/game2048.component';
import { PokemonGameComponent } from './pokemonGame/pokemonGame.component';
import { GameTicTacToeComponent } from './tictactoegame/game/game.component';
import { WebBdComponent } from './web-bd/web-bd.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
