import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.styl']
})
export class ListCommentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'body', 'actions'];
  dataSource;
  postId: number;

  constructor(
    private router: Router,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.postId = +this.route.snapshot.paramMap.get('id');
    this.loadComments();
  }

  loadComments() {
    this.commentService.getComments(this.postId).subscribe(response => {
      this.dataSource = response;
    });
  }

  delete(id) {
    this.commentService.deleteComment(id).subscribe(response => {
      this.loadComments();
    });
  }

  add() {
    this.router.navigateByUrl(this.postId + '/comment/add');
  }

  getposts() {
    this.router.navigateByUrl('/');
  }

}
