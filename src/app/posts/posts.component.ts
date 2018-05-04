import { Component, OnInit } from '@angular/core';
import {Post} from './post.model';
import {PostsService} from './posts.service';
import {Subscription} from 'rxjs/Subscription';
import {DataAccessService} from '../share/data-access.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  term: string;
  p = 1;
  constructor(public postsService: PostsService, private dataService: DataAccessService) { }

  ngOnInit() {
    this.dataService.getPosts();
    this.postsService.postsChange
      .subscribe(
        (data: Post[]) => {
          this.posts = data;
        }
      );
  }

}
