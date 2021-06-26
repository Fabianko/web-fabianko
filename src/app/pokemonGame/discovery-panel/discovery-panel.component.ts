import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../api-pokemon.service';
@Component({
  selector: 'app-discovery-panel',
  templateUrl: './discovery-panel.component.html',
  styleUrls: ['./discovery-panel.component.css'],
  providers: [ApiPokemonService]
})
export class DiscoveryPanelComponent implements OnInit {
  listFound: any[] = [];
  listWrong: any[] = [];
  listLog: any[] = [];
  display_not_found: boolean;
  keyValid: string;
  dificultDistance: number = 3;
  failCount = 0;
  constructor(public apiPokemonService: ApiPokemonService) { }

  ngOnInit(): void {
  }

  validPokemon() {
    this.display_not_found = false;
    let type;
    let rightAnswer = this.apiPokemonService.pokemonSelected.name;
    if (
      this.keyValid === this.apiPokemonService.pokemonSelected.name ||
      this.sameString(this.keyValid,this.apiPokemonService.pokemonSelected.name) ||
      this.keyValid === this.apiPokemonService.pokemonSelected.id.toString()) {
      console.log(this.apiPokemonService.pokemonSelected);
      this.listFound.push(this.apiPokemonService.pokemonSelected);
      this.randomPokemon();
      type = 1;
    }
    else {
      this.failCount += 1;
      this.display_not_found = true;
      this.listWrong.push(this.apiPokemonService.pokemonSelected);
      type = 0;
      if (this.failCount === 3) {
        this.failCount = 0;
        this.randomPokemon();
      }
    }
    this.listLog.push({
      'answer': this.keyValid,
      'rightAnswer':rightAnswer,
      'type': type
    })
    this.keyValid = '';
  }

  public sameString(a:string,b:string) {
    let val=this.levenshteinDistance(a,b);
    console.log(a,b,val)
    if (val <= this.dificultDistance) {

      return true;
    }
    return false;
  }

  public levenshteinDistance (a, b) {
    if(!a || !b) return (a || b).length;
    var m = [];
    for(var i = 0; i <= b.length; i++){
        m[i] = [i];
        if(i === 0) continue;
        for(var j = 0; j <= a.length; j++){
            m[0][j] = j;
            if(j === 0) continue;
            m[i][j] = b.charAt(i - 1) == a.charAt(j - 1) ? m[i - 1][j - 1] : Math.min(
                m[i-1][j-1] + 1,
                m[i][j-1] + 1,
                m[i-1][j] + 1
            );
        }
    }
    return m[b.length][a.length];
}

  randomPokemon() {
    this.apiPokemonService.showPokemon = true;
    let randomNumber: number = Math.floor(Math.random() * this.apiPokemonService.defaultOption);
    setTimeout(() => {
      this.apiPokemonService.loading = true;
      this.apiPokemonService.getPokemon(randomNumber.toString()).subscribe(
        (data) => {

          this.apiPokemonService.showPokemon = false;
          this.apiPokemonService.loading = false;
          this.apiPokemonService.pokemonSelected = data;
        }
      )
    }, 3000
    )
  }

}
