import { Component,OnInit,inject } from '@angular/core';
import { Hero } from '@modules/heroes/models';
import {HeroesServiceService} from '@modules/heroes/services'

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[]=[];
  private HeroesServiceService = inject(HeroesServiceService);
  
  ngOnInit(): void{
    this.HeroesServiceService.getHeroes().subscribe((heroes)=>this.heroes=heroes);
  }
  
}
