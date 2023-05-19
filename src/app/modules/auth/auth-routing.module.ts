import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent, LoginPageComponent, RegisterPageComponent } from './pages';

const routes: Routes = [{
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'loginPage',
        component: LoginPageComponent
      },
      {
        path: 'registerPage',
        component: RegisterPageComponent
      },
      {
        path: '**',
        redirectTo: 'LoginPageComponent'
      },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
