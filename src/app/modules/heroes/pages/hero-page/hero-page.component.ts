import { Component, Input, OnInit, inject } from '@angular/core';
import { Data, Params, Router } from '@angular/router';
import { Hero } from '@modules/heroes/models';
import { HeroesServiceService } from '@modules/heroes/services';
import { delay } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent implements OnInit {
  general: string [] = []

  @Input() id!: string;

  public hero?: Hero;

  private heroesService = inject(HeroesServiceService);
  private router = inject(Router);

  ngOnInit(): void {
    
    this.getHero();
  }

  getHero(): void{
    
    this.heroesService.getHeroById(this.id).pipe(delay(1000)).subscribe ((hero)=> {
    if(!hero)return this.router.navigate(['/heroes']);

    this.hero=hero;
    console.log(this.hero);

    this.general.push(
      this.hero.id, 
      this.hero.superhero,
      this.hero.publisher,
      this.hero.alter_ego,
      this.hero.first_appearance,
      this.hero.characters,
      );
    return;
    });
  }

  goBack(){
    this.router.navigateByUrl('heroes/list');
  }
  

}
