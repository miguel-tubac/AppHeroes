import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '@modules/heroes/components/confirm-dialog';
import { Hero, Publisher } from '@modules/heroes/models';
import { HeroesServiceService } from '@modules/heroes/services';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
})
export class NewPageComponent implements OnInit{
  @Input() id?: string;
  
  public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('',{nonNullable: true}),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
  })

  public publishers=[
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ]
  //Estas son las inyeciones necesarias:
  private heroesService = inject(HeroesServiceService);
  private snakcbar = inject(MatSnackBar);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    if(!this.id ) return;

    this.heroesService.getHeroById(this.id).subscribe((hero)=>{
      this.heroForm.reset(hero);
      return;
    })
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
    
  }

  onSubmit(): void{
    if(this.heroForm.invalid) return;
    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero).subscribe((hero)=>{
        this.router.navigate(['/heroes/list']);
        this.showSnackbar(`${hero.superhero} modificado con exito!`)
      });
      return;
    }
    this.heroesService.addHero(this.currentHero).subscribe((hero)=>{
      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackbar(`${hero.superhero} creado con exito`);
    })

  }

  onDeleteHero(): void{
    if(!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;

      this.heroesService.deleteHero(this.currentHero.id).subscribe((wasDelete)=>{
        if(wasDelete)
        this.router.navigate(['/heroes/list']);
      });
      
    });
  }

  showSnackbar(message: string): void{
    this.snakcbar.open(message, 'done', {duration: 2500},)
  }

}
