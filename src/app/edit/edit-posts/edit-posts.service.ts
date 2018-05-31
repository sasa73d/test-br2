import { Injectable } from '@angular/core';
import {Post} from '../../posts/post.model';
import {Subject} from 'rxjs/Subject';
import {Comment} from '../../posts/comments/comment.model';

@Injectable()
export class EditPostsService {
  postsByUserId: Post[];
  postsByUserIdChange = new Subject<Post[]>();
  commentsByPostId: Comment[];
  commentByPostIdChange = new Subject<Comment[]>();

  constructor() { }

  setPostsByUserId(posts: Post[]) {
    this.postsByUserId = posts;
    this.postsByUserIdChange.next(this.postsByUserId);
  }

  setCommentByPostId(comments: Comment[]) {
    this.commentsByPostId = comments;
    this.commentByPostIdChange.next(this.commentsByPostId);
  }

  getPostById(id: number) {
    return this.postsByUserId.find(x => x.id === id);
  }

  addPost( post: Post) {
    this.postsByUserId.push(post);
  }

  editPost(editPost: Post) {
    for (let post of this.postsByUserId) {
      if (post.id === editPost.id) {
        post = editPost;
      }
    }
  }

  deletePost(id: number) {
    const tempPosts = new Array<Post>();
    for (let post of this.postsByUserId) {
      if (post.id !== id) {
        tempPosts.push(post);
      }
    }
    this.postsByUserId = tempPosts;
    this.postsByUserIdChange.next(this.postsByUserId);
  }

  deleteComment(id: number) {
    const tempComment = new Array<Comment>();
    for (let comment of this.commentsByPostId) {
      if (comment.id !== id) {
        tempComment.push(comment);
      }
    }
    this.commentsByPostId = tempComment;
    this.commentByPostIdChange.next(this.commentsByPostId);
  }

}
