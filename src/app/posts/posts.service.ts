import {Injectable} from '@angular/core';
import {Post} from './post.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PostsService {
  posts: Post[] = [];
  postsChange = new Subject<Post[]>();

  constructor() {}

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChange.next(this.posts);
  }

}
