import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

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

  store() {
    this.postService.storePost(this.body).subscribe(response => {
      this.router.navigateByUrl('/');
    })
  }
}
