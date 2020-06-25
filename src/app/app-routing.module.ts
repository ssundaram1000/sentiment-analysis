import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent, HomeComponent} from './public/home/home.component';
import {LoginComponent} from './public/auth/login/login.component';
import {RegisterComponent} from './public/auth/register/register.component';
import {ConfirmComponent} from './public/auth/confirm/confirm.component';
import {ResendComponent} from './public/auth/resend/resend.component';
import {ForgotComponent} from './public/auth/forgot/forgot.component';
import {SecurehomeRootComponent} from './secure/securehome-root/securehome-root.component';
import {SecurehomeLandingComponent} from './secure/securehome-landing/securehome-landing.component';
import {SentimentComponent} from './secure/sentiment/sentiment.component';


const homeRoutes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'about', component: AboutComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'confirm', component: ConfirmComponent},
      {path: 'confirm/:username', component: ConfirmComponent},
      {path: 'resendCode', component: ResendComponent},
      {path: 'forgotPassword', component: ForgotComponent},
      {path: '', component: LoginComponent}
    ]
  }

];

const secureHomeRoutes: Routes = [
  {
    path: '',
    redirectTo: '/securehome/sentiment',
    pathMatch: 'full'
  },
  {
    path: 'securehome', component: SecurehomeRootComponent, children: [
      {path: '', component: SentimentComponent},
      {path: 'home', component: SecurehomeLandingComponent},
      {path: 'sentiment', component: SentimentComponent}
      ]
  }
];

const routes: Routes = [
  {
    path: '',
    children: [
      ...homeRoutes,
      ...secureHomeRoutes
      // {
      //   path: '',
      //   component: AboutComponent
      // }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
