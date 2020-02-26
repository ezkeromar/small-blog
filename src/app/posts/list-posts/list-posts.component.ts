import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.styl']
})
export class ListPostsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'body', 'actions'];
  dataSource;

  constructor(private postService: PostsService, private router: Router) { }

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
    this.postService.deletePosts(id).subscribe(response => {
      this.loadPosts();
    });
  }

  add() {
    this.router.navigateByUrl('add');
  }

}
