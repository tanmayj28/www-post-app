import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  apiBaseUrl = environment.api_url;
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiBaseUrl + 'posts');
  }

  getPost(postId: any): Observable<any> {
    return this.http.get(this.apiBaseUrl + 'posts/id=' + postId);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiBaseUrl + 'posts', postData);
  }

  getVisitorPosts(visitorId: number): Observable<any> {
    return this.http.get(this.apiBaseUrl + 'visitors/list_posts/' + visitorId);
  }
}
