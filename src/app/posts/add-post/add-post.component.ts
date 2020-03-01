import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { Post } from '../Post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.styl']
})
export class AddPostComponent implements OnInit {
  body: string;

  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  setBody($event) {
    this.body = $event.srcElement.value;
  }

  store() {
    const post = new Post();
    post.body = this.body;
    this.postService.storePost(post).subscribe(response => {
      this.router.navigateByUrl('/');
    });
  }
}
