import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Auth} from 'aws-amplify';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {
  reviewText: string;
  reviewResult: string;
  version: string;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.version = environment.version;
  }

  onReviewSubmit() {
    // Send Http request
    this.http
      .post(
        'https://wjl2345p70.execute-api.us-east-1.amazonaws.com/prod',
        this.reviewText
      )
      .subscribe(responseData => {
        this.reviewResult = responseData.toString();
      });
  }

  onClear() {
    this.reviewText = '';
    this.reviewResult = '';
  }

  onLogOut() {
    Auth.signOut()
      .then(data => {
        console.log(data);
        console.log('You are successfully logged out');
        this.router.navigate(['/home/login']);
      })
      .catch(err => console.log(err));
  }

}
