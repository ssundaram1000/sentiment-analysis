import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {
  reviewText: string;
  reviewResult: string;
  version: string;

  constructor(private http: HttpClient) {}

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


}
