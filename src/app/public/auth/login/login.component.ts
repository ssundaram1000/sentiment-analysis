import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';
import {RegistrationUser} from '../../../model/RegistrationUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: Router;
  user: RegistrationUser;
  errorMessage: string;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.user = new RegistrationUser();
    this.errorMessage = null;
  }

  onLogin(): void {
    Auth.signIn(this.user).then(user => {
      // console.log(user);
      this.router.navigate(['/securehome']);
    })
      .catch(err => console.log(err));
  }

}
