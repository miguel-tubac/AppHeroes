import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '@modules/heroes/models';


import {HeroesServiceService} from '@modules/heroes/services';
//{objeto}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {

  public searchInput = new FormControl('')
  public heroes: Hero[]=[];
  public selectedHero?: Hero;

  private heroesService= inject(HeroesServiceService);
 
  searchHero(): void{
    const value: string=this.searchInput.value || '';
    this.heroesService.getSuggestions(value).subscribe((heroes) => this.heroes = heroes);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void{
    if(!event.option.value){
      this.selectedHero=undefined;
      return 
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
  }

}
