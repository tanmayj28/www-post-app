import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from './../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class UpvoteService {
	apiBaseUrl = environment.api_url;
  constructor(private http: HttpClient) {
  }

  deleteUpvote(upvoteData: any): Observable<any> {
		return this.http.delete(this.apiBaseUrl + 'upvotes/' + upvoteData);
  }

  postUpvote(upvoteData: any): Observable<any> {
		return this.http.post(this.apiBaseUrl + 'upvotes/', upvoteData);
	}
}
