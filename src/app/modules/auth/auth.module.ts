import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent, LoginPageComponent, RegisterPageComponent } from './pages';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
