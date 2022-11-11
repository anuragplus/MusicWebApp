import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { MusicComponent } from './music/music.component';

import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent

  }
,
  {
    path : 'login',
    component : LoginComponent

  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path : 'favourites',
    component : FavouritesComponent
    
  },{
    path : 'music',
    component : MusicComponent
  },{
    path : 'forgot',
    component : ForgotComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
