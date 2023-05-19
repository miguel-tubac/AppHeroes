import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent, LayoutPageComponent, ListPageComponent, NewPageComponent, SearchPageComponent } from './pages';
import { MaterialModule } from '@modules/material/material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipe/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    HeroImagePipe,
    ConfirmDialogComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
