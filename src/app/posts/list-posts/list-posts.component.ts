import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.styl']
})
export class ListPostsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'body', 'actions'];
  dataSource;

  constructor(
    private postService: PostsService,
    private router: Router,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(response => {
      this.dataSource = response;
    });
  }

  edit(id) {
    this.router.navigateByUrl('edit/' + id);
  }

  delete(id) {
    this.commentService.getComments(id).subscribe(res => {
      if (Object.keys(res).length === 0) {
        this.postService.deletePosts(id).subscribe(response => {
          this.loadPosts();
        });
      } else {
        alert('there is comments in this post');
      }
    });
  }

  add() {
    this.router.navigateByUrl('add');
  }

  addComment(id: number) {
    this.router.navigateByUrl(id + '/comment/consult');
  }

}
