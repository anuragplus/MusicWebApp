import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MusicComponent } from './music/music.component';
import { SearchComponent } from './search/search.component';

import {ApiServiceService} from './api-service.service'
import { Injector} from '@angular/core';
import { UserRegistrationService } from './user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './forgot/forgot.component';
export let AppInjector: Injector;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    FavouritesComponent,
    MusicComponent,
    SearchComponent,
    ForgotComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService,UserRegistrationService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
 }
