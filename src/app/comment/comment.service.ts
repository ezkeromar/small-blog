import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './Comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public getComments(postId: number) {
    return this.http.get('http://localhost:5000/comments?postId=' + postId);
  }

  public storeComment(comment: Comment) {
    return this.http.post('http://localhost:5000/comments', comment);
  }

  public deleteComment(commentId: number) {
    return this.http.delete('http://localhost:5000/comments/' + commentId);
  }

  public deletePostComments(postId: number) {
    return this.http.delete('http://localhost:5000/comments?postId=' + postId);
  }
}
