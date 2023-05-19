import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models';

@Component({
  selector: 'heroes-card',
  templateUrl: './card.component.html',
  
})
export class CardComponent implements OnInit{

  @Input() public hero!: Hero;

  ngOnInit(): void {
    if(!this.hero) throw Error('Hero property es requered');    
  }
}
