import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../Post.model';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.styl']
})
export class UpdatePostComponent implements OnInit {
  post: Post;
  postId: number;
  body: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postId = +this.route.snapshot.paramMap.get('id');
    this.loadPost();
  }

  loadPost() {
    this.postService.getPost(this.postId).subscribe(response => {
      this.post = response;
      this.body = response.body;
    });
  }

  setBody($event) {
    this.body = $event.srcElement.value;
  }

  store() {
    this.post.body = this.body;
    this.postService.updatePost(this.post).subscribe(response => {
      this.router.navigateByUrl('/');
    });
  }

}
