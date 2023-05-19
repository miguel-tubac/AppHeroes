import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: 'auth',
    loadChildren: () => import('@modules/auth').then((m)=>m.AuthModule)
  },
  {  
    path: 'heroes',
    loadChildren: () => import('@modules/heroes').then((m)=>m.HeroesModule)
  },
  {  
    path: '404',
    loadComponent: () => import('@shared/pages').then((c)=>c.Error404Component)
  }, 
  {  
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {  
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
