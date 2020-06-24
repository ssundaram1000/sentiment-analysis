import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent, HomeComponent, HomeLandingComponent} from './public/home/home.component';
import { LoginComponent } from './public/auth/login/login.component';
import { RegisterComponent } from './public/auth/register/register.component';
import { ConfirmComponent } from './public/auth/confirm/confirm.component';
import { ForgotComponent } from './public/auth/forgot/forgot.component';
import { ResendComponent } from './public/auth/resend/resend.component';
import {FormsModule} from '@angular/forms';
import { SentimentComponent } from './secure/sentiment/sentiment.component';
import { SecurehomeRootComponent } from './secure/securehome-root/securehome-root.component';
import { SecurehomeLandingComponent } from './secure/securehome-landing/securehome-landing.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLandingComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmComponent,
    ForgotComponent,
    ResendComponent,
    SecurehomeRootComponent,
    SecurehomeLandingComponent,
    SentimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
