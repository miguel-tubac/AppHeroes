import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent, ListPageComponent, NewPageComponent, SearchPageComponent, LayoutPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-hero', component: NewPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: HeroPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
