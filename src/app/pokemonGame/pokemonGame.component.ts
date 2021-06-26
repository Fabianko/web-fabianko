import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ApiPokemonService} from './api-pokemon.service';
@Component({
  selector: 'pokemon-game',
  templateUrl: './pokemonGame.component.html',
  styleUrls: ['./pokemonGame.component.css'],
  providers: [ApiPokemonService, HttpClient]
})
export class PokemonGameComponent implements OnInit{
  constructor(public apiService: ApiPokemonService){}
  title = 'WhoIsThatPokemon';
  ngOnInit() {

  }
}
