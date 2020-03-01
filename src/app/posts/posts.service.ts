import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get('http://localhost:5000/posts');
  }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>('http://localhost:5000/posts/' + id);
  }

  public deletePosts(id) {
    return this.http.delete('http://localhost:5000/posts/' + id);
  }

  public storePost(post: Post) {
    return this.http.post('http://localhost:5000/posts', post);
  }

  public updatePost(post: Post) {
    return this.http.put('http://localhost:5000/posts/' + post.id, post);
  }
}
