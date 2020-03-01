import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../Comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.styl']
})
export class AddCommentComponent implements OnInit {
  body: string;
  postId: number;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private router: Router) { }

  ngOnInit() {
    this.postId = +this.route.snapshot.paramMap.get('id');
  }

  setBody($event) {
    this.body = $event.srcElement.value;
  }

  store() {
    const comment = new Comment();
    comment.postId = this.postId;
    comment.body = this.body;
    this.commentService.storeComment(comment).subscribe(response => {
      this.router.navigateByUrl(this.postId + '/comment/consult');
    });
  }

}
