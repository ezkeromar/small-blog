import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';


const routes: Routes = [
  { path: 'add', component: AddPostComponent },
  { path: 'edit/:id', component: UpdatePostComponent },
  { path: '', component: ListPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
