import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get('http://localhost:5000/posts');
  }

  public deletePosts(id) {
    return this.http.delete('http://localhost:5000/posts/' + id);
  }

  public storePost(body) {
    return this.http.post('http://localhost:5000/posts', {body});
  }
}
