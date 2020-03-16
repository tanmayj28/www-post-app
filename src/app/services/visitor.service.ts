import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from './../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class VisitorService {
  apiBaseUrl = environment.api_url;
  constructor(private http: HttpClient) {
  }

  getVisitors(): Observable<any> {
		return this.http.get(this.apiBaseUrl + 'visitors/');
  }

  getVisitor(visitorId: any): Observable<any> {
		return this.http.get(this.apiBaseUrl + 'visitors/' + visitorId);
  }

  createVisitor(visitorData: any): Observable<any> {
		return this.http.post(this.apiBaseUrl + 'visitors', visitorData);
  }

}
